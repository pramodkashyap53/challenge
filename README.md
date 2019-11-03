# Cubereum-backend-blog

 Blog backend created with Django and REST-framework,Django-ORM and SQLITE3
Cubereum-backend project and Blog app has been created.

## Installation

Use the package manager [pip] to install requirements present in requirements.txt

```bash
pip install -r requirements.txt
```

## Usage
Used MVT architecture. User,Posts models has been defined and its corresponding views has been defined and has been associated with its corresponding API

```python
#blog app urls
urlpatterns = [
    path(r'post/',PostsCreate.as_view(), name='Postcreate'),
    path(r'post/<int:id>',PostsCreate.as_view(), name='Postupdate'),
    path(r'postlist/',PostList.as_view(), name='PostList'),
]
#project urls
urlpatterns = [
    path('admin/', admin.site.urls),
    #login
    path('api/token/', jwt_views.TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', jwt_views.TokenRefreshView.as_view(), name='token_refresh'),
    #blog urls included
    path('api/',include('blog.urls')),
    #signup
    path('api/signup/',SignUp.as_view(),name='SignUp'),
]

```

## Conclusion
The specified conditions has been satisfied and tried to add other featuresbut could't complete.



