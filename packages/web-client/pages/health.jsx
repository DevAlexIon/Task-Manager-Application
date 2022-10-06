export default function Health({ data }) {
  return (
    <div>
      <h1>
        Status code:
        {data.status}
      </h1>
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch('http://localhost:3000/api/health');
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
}
