from flask import Flask

#Do not confuse app the variable with app the folder - which gets assigned the FLASK object from views.py
app = Flask(__name__)

@app.route("/")
def index():
    return "Welcome to flask"

if __name__ == "__main__":
    app.run()

# Here you can add all your views and modules(?) 
# e.g from app import concatCSV, cleanCSV, insert

