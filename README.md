기회가 된다면 partials폴더의 footer.pug파일을 삭제하고 base.pug에서 해당 기능을 구현할 것

#Wetube-reloaded
Route

Global router
/
/join
/login
/search

Users router

/users/:id -> see User profile
/users/logout
/users/edit -> edit my profile
/users/delete -> delete my prifile

Videos router  
 /videos/:id -> see video
/videos/:id/edit  
 /videos/:id/remove
/videos/upload
