// Define the post object with the given details.
let postsData = [
    {
        id: 1,
        author: "John",
        content: "Hello, Instagram!",
        likes: 10,
        comments: ["Great post!", "Nice photo!"],
        image: "https://files.codingninjas.in/image2-28694.jpg",
    },
    {
        id: 2,
        author: "Jane",
        content: "This is a great post!",
        likes: 15,
        comments: [],
        image: "https://files.codingninjas.in/oip-28704.jpg",
    },
    {
        id: 3,
        author: "Alice",
        content: "Another post",
        likes: 8,
        comments: [],
        image: "https://files.codingninjas.in/th-2-28706.jpg",
    },
    {
        id: 4,
        author: "Bob",
        content: "Check out this photo!",
        likes: 20,
        comments: [],
        image: "https://files.codingninjas.in/image1-28708.jpg",
    },
];
class PostView
{
    postElement
    likes
    comments
    author
    image
    content
    likeButton
    commentInput
    commentButton
    postFooter
    commentContainer
    constructor(author, image, content, likes = 0, comments = [])
    {
        this.likes = likes
        this.comments = comments
        this.createPostContent(author, image, content)
        this.createPostInteractionFields()
        this.createPostFooter()
        this.createCommentContainer()
        this.createPost()
    }
    createPost()
    {
        this.postElement = document.createElement('div')
        this.postElement.classList.add('post')
        this.postElement.append(this.author, this.image, this.content,
            this.likeButton, this.commentInput, this.commentButton,
            this.postFooter, this.commentContainer
        )
    }
    /**
     * creates the author, image and content elements of the post
     */
    createPostContent(author, image, content)
    {
        // Create an h3 element for the author's name and set its text content.
        this.author = document.createElement('h3')
        this.author.textContent = author
        // Create an img element for the post's image and set its source and alt text.
        this.image = document.createElement('img')
        this.image.setAttribute('src', image)
        this.image.setAttribute('alt', 'Post Image')
        // Create a p element for the post's content and set its text content.
        this.content = document.createElement('p')
        this.content.textContent = content
    }
    /**
     * Creates the comment field, like button and input button
     */
    createPostInteractionFields()
    {
        // Create a button element for "Like" and set its text content.
        this.likeButton = document.createElement('button')
        this.likeButton.textContent = 'Like'
        this.likeButton.classList.add('like-button')
        // Create an input element for writing comments and set its type and placeholder.
        this.commentInput = document.createElement('input')
        this.commentInput.setAttribute('type', 'text')
        this.commentInput.setAttribute('placeholder', 'Write a comment...')
        // Create a button element for "Comment" and set its text content.
        this.commentButton = document.createElement('button')
        this.commentButton.textContent = 'Comment'
        this.commentButton.classList.add('comment-button')
    }
    createPostFooter()
    {
        // Create a div element for the post footer and set its class and text content.
        this.postFooter = document.createElement('div')
        this.postFooter.classList.add('post-footer')
        this.updateLikesAndComments()
    }
    createCommentContainer()
    {
        // Create a div element for the comments container and set its class.
        this.commentContainer = document.createElement('div')
        this.commentContainer.classList.add('comments-container')
        // Initially, set its display style to 'none' to hide it.
        this.commentContainer.style.display = 'none'
        this.commentContainer.append(...this.#createComments())
    }
    updateLikesAndComments()
    {
        this.postFooter.textContent = `Likes: ${this.likes} Comments: ${this.comments.length}`
    }
    #createComments()
    {
        return this.comments.map(comment => this.#createComment(comment))
    }
    #createComment(comment)
    {
        const commentElement = document.createElement('p')
        commentElement.textContent = comment
        return commentElement
    }
    addComment(comment)
    {
        this.comments.push(comment)
        const commentElement = this.#createComment(comment)
        this.commentContainer.append(commentElement)
    }
}

const postsContainer = document.getElementById('posts')

postsData.forEach(post => renderPost(post))
document.getElementById('postForm').addEventListener('submit', submitEventHandler)

function renderPost(post)
{
    const view = new PostView(post.author, post.image, post.content, post.likes, post.comments)
    postsContainer.append(view.postElement)

    view.likeButton.addEventListener('click', () => likeEventHandler(post, view))
    view.commentButton.addEventListener('click', () => commentEventHandler(view))
    view.postFooter.addEventListener('click', () => footerEventHandler(view))
}

function likeEventHandler(post, view)
{
    post.likes++
    view.likes++
    view.updateLikesAndComments()
    view.likeButton.style.backgroundColor = 'red'
    view.likeButton.disabled = true
}
function commentEventHandler(view)
{
    const comment = view.commentInput.value
    view.commentInput.value = ''
    view.addComment(comment)
    view.updateLikesAndComments()
}
function footerEventHandler(view)
{
    const display = view.commentContainer.style.display
    view.commentContainer.style.display = display == 'none' ? 'block' : 'none'
}

function submitEventHandler(event)
{
    event.preventDefault()
    const data = new FormData(this)
    const image = URL.createObjectURL(this.elements['image'].files[0])
    const post = new Post('You', image, this.elements['caption'].value)
    console.log(post)
    renderPost(post)
}

function Post(author, image, content, likes = 0, comments = [])
{
    this.id = postsData.length
    this.author = author
    this.content = content
    this.likes = likes
    this.comments = comments
    this.image = image
    postsData.push(this)
}