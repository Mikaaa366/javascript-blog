'use strict';

const titleClickHandler = function(event){
    const clickedElement = this;
    console.log('Link was clicked!');
    console.log(event)
  
    /* [DONE] remove class 'active' from all article links  */
    const activeLinks = document.querySelectorAll('.titles a.active');

    for(let activeLink of activeLinks){
        activeLink.classList.remove('active');
    }
  
    /* [IN PROGRESS] add class 'active' to the clicked link  */
    /* const activeLink = document.querySelector('.titles a'); */
    clickedElement.classList.add('active'); 
    console.log('clickedElement:', clickedElement);
     
  
    /* [DONE] remove class 'active' from all articles */
    const activeArticles = document.querySelectorAll('.post');
    
    for(let activeArticle of activeArticles){
        activeArticle.classList.remove('active');
    }
  
    /* get 'href' attribute from the clicked link */
    const articleSelector = clickedElement.getAttribute('href');

    console.log ('articleSelector', articleSelector);
  
    /* find the correct article using the selector (value of 'href' attribute) */
    const targetArticle = document.querySelector(articleSelector);
    console.log(targetArticle);
  
    /* add class 'active' to the correct article */
    targetArticle.classList.add('active'); 

  }
 
const optArticleSelector = '.post',
    optTitleSelector = '.post-title',
    optTitleListSelector = '.titles';

function generateTitleLinks(){

/* remove contents of titleList */
    const titleList = document.querySelector(optTitleListSelector);
        function clearTitleList() {
        titleList.innerHTML = '';
    }
    clearTitleList();
    console.log('titleList', titleList);
/* for each article */
    const articles = document.querySelectorAll('.post');
    let html = '';
    for (let article of articles){
    
/* get the article id */
    const articleId = article.getAttribute('id');
/* find the title element */
/* get the title from the title element */
    const articleTitle = article.querySelector(optTitleSelector).innerHTML;
/* create HTML of the link */
    const linkHTML = '<li><a href="#' + articleId + '"><span>' + articleTitle + '</span></a></li>';
    console.log(linkHTML);
/* insert link into titleList */
    titleList.insertAdjacentHTML('beforeend', linkHTML);
    html = html + linkHTML;
    }

    titleList.innerHTML = html;
    console.log('articles', articles);

    const links = document.querySelectorAll('.titles a');

    for(let link of links){
      link.addEventListener('click', titleClickHandler);
    }
    
}

generateTitleLinks();