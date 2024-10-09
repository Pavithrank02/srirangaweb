const TwoColumnTable = ({ data }) => {


  return (
    <table className='flex justify-center' style={{ border: '1px solid black', width: '100%', margin: '20px auto', textAlign: 'center' }}>
      <tbody>
        {Object.entries(data).map(([key, value]) => (
          <tr key={key}>
            <td className='font-extrabold text-white' style={{ padding: '8px', border: '2px solid', }}>{key}</td>
            <td style={{ padding: '10px', border: '2px solid white ' }}>{value}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TwoColumnTable
