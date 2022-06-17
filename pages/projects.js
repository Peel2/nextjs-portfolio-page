import Layout from '../components/layout';
import Head from 'next/head';
import { TOKEN, DATABASE_ID } from '../config';
import ProjectItem from '../components/projects/project-item';

export default function Projects({ projects }) {
  return (
    <Layout>
      <Head>
        <title>필리스튜디오 포트폴리오</title>
        <meta name='description' content='코딩 작업물' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <div className='flex flex-col items-center justify-center min-h-screen mb-10 px-3'>
        <h1 className='text-4xl font-bold sm:text-6xl'>
          총 프로젝트:
          <span className='pl-4 text-blue-500'>{projects.results.length}</span>
        </h1>

        <div className='grid grid-cols-1 md:grid-cols-2 m-6 py-10 gap-8'>
          {projects.results.map((aProject) => (
            <ProjectItem key={aProject.id} data={aProject} />
          ))}
        </div>
      </div>
    </Layout>
  );
}

// 빌드할 때 호출
export async function getStaticProps() {
  const options = {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Notion-Version': '2022-02-22',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${TOKEN}`,
    },
    body: JSON.stringify({
      sorts: [
        {
          property: 'Title',
          direction: 'ascending',
        },
      ],
      page_size: 100,
    }),
  };

  const response = await fetch(
    `https://api.notion.com/v1/databases/${DATABASE_ID}/query`,
    options
  );

  const projects = await response.json();

  return {
    props: { projects }, // will be passed to the page component as props
  };
}
