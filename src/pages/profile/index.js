import Layout from "../../components/layouts";
import Card from 'react-bootstrap/Card';
import p from './p.png';
import ListGroup from 'react-bootstrap/ListGroup';
import Link from "next/link";

export default function Question() {
  const classItems = [
    {
      href: "/home",
      title: "Home",
      icon: "bi-house-door-fill",
    },
    {
      href: "/class",
      title: "Class",
      icon: "bi-grid-fill",
    },
    {
      href: "/notification",
      title: "Notification",
      icon: "bi-bell-fill",
    },
    {
      href: "/",
      title: "Logout",
      icon: "bi-box-arrow-left",
    },
  ];
  return (
    <Layout>
      <div className="d-flex justify-content-center pt-5">
        <Card className="rounded-4" style={{ width: '30rem', height: '15rem', background: '#484F62', textAlign: 'center'}}>
          <Card.Body>
            <Card.Title style={{textAlign: 'center', color: '#ECECEC'}}>Profile</Card.Title>
            <Card.Subtitle className="mb-2 text-muted" style={{textAlign: 'center'}}>Edit Your Profile Here!</Card.Subtitle>
            <div className="row">
              <div className="col">
                <Card.Img src={p} />
              </div>
              <div className="col">
                <Card.Text style={{textAlign: 'start', color: '#ECECEC'}}>
                  Real Name :
                </Card.Text>
                <Card.Text style={{textAlign: 'start', color: '#ECECEC'}}>
                  Nick Name :
                </Card.Text>
                <Card.Text style={{textAlign: 'start', color: '#ECECEC'}}>
                  Student ID :
                </Card.Text>
              </div>
            </div>
          </Card.Body>
        </Card>
      </div>
      <div className="d-flex justify-content-center pt-3">
        <span>Your Class</span>
        {/* <div className="row">  
          <ListGroup>
            <ListGroup.Item>Cras justo odio</ListGroup.Item>
            <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
            <ListGroup.Item>Morbi leo risus</ListGroup.Item>
            <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
            <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
          </ListGroup>
        </div> */}
        <div className="d1">
          {classItems.map(({ href, title, icon }) => (
            <li key={title} className="p-0">
              <Link href={href}>
                <p
                  className={`nav-link px-2 text-dark`}
                >
                  <i className={icon} />
                  <span className="ms-2 d-sm-inline">{title}</span>
                </p>
              </Link>
            </li>
          ))}
        </div>
      </div>
    </Layout>
  );
}