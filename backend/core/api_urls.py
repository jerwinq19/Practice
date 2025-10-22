# routers
from rest_framework import routers
from .viewsets import SampleViewSets, UserViewSets, CommentViewSets, ThreadViewSets

router = routers.DefaultRouter()
router.register(r'sample', SampleViewSets)
router.register(r'user', UserViewSets)
router.register(r'comment', CommentViewSets)
router.register(r'thread', ThreadViewSets)

urlpatterns = router.urls
