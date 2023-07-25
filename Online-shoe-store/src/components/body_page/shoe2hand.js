import { useEffect, useState } from 'react';
import { Card, Spin, Button } from 'antd';

const { Meta } = Card;

function ShoeSecondHand({ isNew, title }) {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  useEffect(() => {
    setLoading(true);
    fetch(`http://localhost:3080/api/products?isNew=${!!isNew}`)
      .then(async (res) => {
        const result = await res.json();
        setData(result);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      })
      .finally(() => setLoading(false));
  }, [isNew]);

  return (
    <div>
      {/* <h2>| {title}</h2> */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr',
          gap: 15,
        }}
      >
      
        {loading ? (
          <Spin size="large" />
        ) : (
          data.map((items) => (
            <Card
              key={items._id}
              hoverable
              style={{ width: 240 }}
              cover={<img alt="example" src={items.image} />}
            >
              <Meta
                title={items.name}
                description={items.description}
                isNew={items.isNew === false}
              />
            </Card>
          ))
        )}
      </div>
      <a href="/allshoe2hand">Xem tất cả</a>
    </div>
  );
}

export default ShoeSecondHand;
