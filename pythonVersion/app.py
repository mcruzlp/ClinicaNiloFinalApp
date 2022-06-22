from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def clinica_nilo():
  return render_template('index.html')

app.run()