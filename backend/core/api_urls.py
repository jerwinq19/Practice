# routers
from rest_framework import routers
from .viewsets import SampleViewSets, UserViewSets

router = routers.DefaultRouter()
router.register(r'sample', SampleViewSets)
router.register(r'user', UserViewSets)

urlpatterns = router.urls
