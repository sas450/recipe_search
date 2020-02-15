from flask import Flask, render_template  

app = Flask(__name__)

@app.route("/salvador")
def salvador():
    return "Hello, Salvador"

@app.route("/")
def home():
    return render_template("public/index.html")
    
if __name__ == "__main__":
    app.run(debug=True)


    
if __name__ == "__main__":
    app.run(debug=True)
