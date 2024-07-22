from fastapi import FastAPI

from routes.rutasAPI import rutas

app=FastAPI()

app.include_router(rutas)