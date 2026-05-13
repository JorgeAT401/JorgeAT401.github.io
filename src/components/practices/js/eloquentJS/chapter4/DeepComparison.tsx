import '@/css/base.scss';

const deepEqual = (a: any, b: any): boolean => {
  if (a === b) return true;
  if (a === null || typeof a !== "object" || b === null || typeof b !== "object") return false;
  const aKeys = Object.keys(a), bKeys = Object.keys(b);
  if (aKeys.length !== bKeys.length) return false;
  for (let key of aKeys) {
    if (!bKeys.includes(key) || !deepEqual(a[key], b[key])) return false;
  }
  return true;
};

export const DeepComparison = () => {

  const obj1 = { name: "Jorge", details: { role: "Junior Dev", level: 1 } };
  const obj2 = { name: "Jorge", details: { role: "Junior Dev", level: 1 } };
  const obj3 = { name: "Vyrant", details: { role: "Senior Dev", level: 3 } };

  return (
    <div style={{ padding: '20px', backgroundColor: '#1e1e1e', color: '#d4d4d4', borderRadius: '8px' }}>
      <h2 style={{ color: '#4ec9b0' }}>🧪 Deep Comparison Test</h2>
      
      <div style={{ marginBottom: '20px' }}>
        <p><strong>Object A:</strong> <code>{JSON.stringify(obj1)}</code></p>
        <p><strong>Object B:</strong> <code>{JSON.stringify(obj2)}</code></p>
        <p><strong>Object C:</strong> <code>{JSON.stringify(obj3)}</code></p>
      </div>

      <hr style={{ borderColor: '#333' }} />

      <div style={{ marginTop: '20px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <span>¿A is equal to B?</span>
          <span style={{ 
            padding: '4px 8px', 
            borderRadius: '4px', 
            backgroundColor: deepEqual(obj1, obj2) ? '#22863a' : '#cf222e' 
          }}>
            {deepEqual(obj1, obj2) ? 'TRUE' : 'FALSE'}
          </span>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginTop: '10px' }}>
          <span>¿A is equal to C?</span>
          <span style={{ 
            padding: '4px 8px', 
            borderRadius: '4px', 
            backgroundColor: deepEqual(obj1, obj3) ? '#22863a' : '#cf222e' 
          }}>
            {deepEqual(obj1, obj3) ? 'TRUE' : 'FALSE'}
          </span>
        </div>
      </div>
    </div>
  );
};