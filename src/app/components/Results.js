
import Card from './Card';

export default function Results({ results, onDelete }) {
  return (
    <div className='container-fluid py-4 pl-3 bg-success.bg-gradient'>
      <div className='row flex-col'>
        {results.map((result) => (
          <div key={result.id} className='col-sm-6 col-lg-4 col-xl-3 col-xxl-2'>
            <Card result={result} onDelete={onDelete} />
          </div>
        ))}
      </div>
    </div>
  );
}

