# suppliers/views.py
from rest_framework import viewsets
from .models import Supplier
from .serializers import SupplierSerializer

class SupplierViewSet(viewsets.ModelViewSet):
    queryset = Supplier.objects.all()  # Define queryset directly
    serializer_class = SupplierSerializer


    def get_queryset(self):
        from .models import Supplier
        if self.queryset is None:
            self.queryset = Supplier.objects.all()
        return self.queryset

    def get_serializer_class(self):
        from .serializers import SupplierSerializer
        if self.serializer_class is None:
            self.serializer_class = SupplierSerializer
        return self.serializer_class
