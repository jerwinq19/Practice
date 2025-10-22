# routers
from rest_framework import routers
from .viewsets import SampleViewSets

router = routers.DefaultRouter()
router.register(r'sample', SampleViewSets)

urlpatterns = router.urls
