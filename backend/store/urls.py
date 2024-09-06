from django.urls import path
from . import views
from .models import Product
from .views import ProductList, CategoryList, ProductDetail

urlpatterns = [
    path('', views.product_list, name='product_list'),
    path('product/<int:product_id>/', views.product_detail, name='product_detail'),
    path('api/products/', ProductList.as_view(), name='product-list'),
    path('api/categories/', CategoryList.as_view(), name='category-list'),
    path('api/products/<int:id>', ProductDetail.as_view(), name='product-detail'),
    path('api/products/categories/<int:category_id>', ProductDetail.as_view(), name='product-detail'),
]
