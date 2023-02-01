import Card from 'react-bootstrap/Card';
import tw from 'twin.macro';

function BlogPost() {
  return (
    <Card tw='shadow-xl hover:scale-[1.02] transition'>
    <Card.Img variant="top" src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
    <Card.Body>
      <Card.Text>
        <strong>Category</strong>
      </Card.Text>
    </Card.Body>
  </Card>
  );
}

export default BlogPost;