import React from "react";

const NewsCard = ({news}) => {
  return (
    <div className="col-sm-12 col-md-6 col-xl-4">
      <div class="card">
        <img
          src={news.urlToImage}
          class="card-img-top"
          alt="..."
        />
        <div class="card-body">
          <h5 class="card-title">{news.title}</h5>
          <p class="card-text">
          {news.description}
          </p>
          <a href={news.url} target="_blank" class="btn btn-primary w-100">
            Read Full News
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
