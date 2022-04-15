FROM python:3.10-bullseye

WORKDIR /src
COPY . .

RUN pip install -r requirements.txt

ENTRYPOINT ["python"]
CMD [ "run.py" ]
