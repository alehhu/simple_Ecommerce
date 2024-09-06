from django.shortcuts import render, get_object_or_404
from rest_framework import generics
from .models import (Product, Category, Customer, Order, OrderItem)
from .serializers import ProductSerializer, CategorySerializer, CustomerSerializer, OrderSerializer, OrderItemSerializer

def product_list(request):
    products = Product.objects.all()
    return render(request, 'store/product_list.html', {'products': products})

def product_detail(request, product_id):
    product = get_object_or_404(Product, id=product_id)
    return render(request, 'store/product_detail.html', {'product': product})

class ProductList(generics.ListAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

class ProductDetail(generics.RetrieveAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    lookup_field = 'id'  # The field to use for looking up the product

class CategoryList(generics.ListAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

class ProductsByCategory(generics.ListAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

    def get_queryset(self):
        """
        Optionally filters products by category.
        """
        queryset = super().get_queryset()  # Get all products initially
        category_id = self.request.query_params.get('category_id')  # Look for 'category_id' in the query params
        if category_id:
            queryset = queryset.filter(category__id=category_id)  # Filter products by category ID if present
        return queryset


