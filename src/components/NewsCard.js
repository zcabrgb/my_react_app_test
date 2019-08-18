import "../styling/NewsCard.scss";

const NewsCard = props => {
  return (
    <div class="blog-card">
      <div class="meta">
        <div
          class="photo"
          style="background-image: url(https://storage.googleapis.com/chydlx/codepen/blog-cards/image-1.jpg)"
        />
        <ul class="details">
          <li class="author">
            <a href="#">{props.author}</a>
          </li>
          <li class="date">{props.date}</li>
        </ul>
      </div>
      <div class="description">
        <h>{props.title}</h>
        <p> {props.description}</p>
        <p class="read-more">
          <a href="#">Read More</a>
        </p>
      </div>
    </div>
  );
};
