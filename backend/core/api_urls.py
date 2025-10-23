# routers
from rest_framework import routers
from .viewsets import UserViewSets

router = routers.DefaultRouter()
router.register(r'user', UserViewSets)

urlpatterns = router.urls
