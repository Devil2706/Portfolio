document.addEventListener("DOMContentLoaded", () => {
    navigateTo(window.location.host);
});

window.addEventListener("hashchange", () => {
    navigateTo(window.location.hash);
});

function loadPageContent(content) {
    const app = document.getElementById('app');
    app.innerHTML = content;
};

function renderHeader() {
    return `<header>
                <!--Navigation Links-->
                <nav class="nav-pills">
                        <ul class="nav justify-content-center">
                            <li class="nav-item">
                                <a class="nav-link" href="#/home">Home</a>
                            </li>
                            <li class="nav-item">
                                <button type="button" class="nav-link" data-bs-toggle="modal" data-bs-target="#postModal" style="background: none; border: none;">Add post</button>
                                <!--Modal for add post-->
                                <div class="modal fade" id="postModal" tabindex="-1" aria-labelledby="postModalLabel" aria-hidden="true">
                                    <div class="modal-dialog">
                                        <div class="modal-content">
                                            <div class="modal-header">
                                                <h4 class="modal-title" id="postModalLabel">Add a Post</h4>
                                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                            </div>

                                            <div class="modal-body">
                                                <form id="uploadForm" enctype="multipart/form-data">
                                                    <div class="container">
                                                        <div class="row mb-3">
                                                            <div class="col">
                                                                <input class="form-control" type="file" name="image" id="imageInput">
                                                            </div>
                                                        </div>

                                                        <div class="row">
                                                            <div class="col">
                                                                <textarea id="caption" class="form-control" placeholder="Add" style="height: 50px"></textarea>
                                                            </div>
                                                        </div>

                                                    </div>
                                            </form>
                                            </div>
                            
                                            <div class="modal-footer text-center">
                                                <button type="button" id="uploadButton" id="postButton" style="background: #A6FF00; font-size:15px; border:none; border-radius: 10px; width: 100px; color: #1D1D1F;" onclick="upload()">Post</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
            
                            <li class="nav-item">
                                <button id="logoutBtn" class="btn btn-danger">Log Out</button>
                            </li>

                        </ul>
                </nav>

                
                
                <!--Styling for header-->
                <style>
                    header {
                        background-color: #1D1D1F;
                    }

                    .nav-link {
                        color: white;
                    }

                    #dropdownMenu {
                        background-color: #1D1D1F;
                        border: none;
                    }
                </style>

            </header>`;
}
