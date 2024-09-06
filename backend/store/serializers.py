from rest_framework import serializers
from .models import Category, Product, Customer, Order, OrderItem

class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = ['name', 'price', 'category', 'description', 'id']

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ['name', 'id']

class CustomerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Customer
        fields = ['first_name', 'last_name', 'email']

class OrderSerializer(serializers.ModelSerializer):
    class Meta:
        model = Order
        fields = ['customer', 'date_ordered']

class OrderItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = OrderItem
        fields = ['product', 'order', 'quantity']