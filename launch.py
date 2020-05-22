import subprocess
import platform

system_type = platform.system()     # Linux: Linux; Mac: Darwin; Windows: Windows

try:
    server_proc = subprocess.Popen(["python", "-m", "http.server", "80"])
except FileNotFoundError:
    try:
        server_proc = subprocess.Popen(["py", "-m", "http.server", "80"])
    except FileNotFoundError:
        server_proc = subprocess.Popen(["python3", "-m", "http.server", "80"])

if system_type == "Darwin":
    chrome_proc = subprocess.Popen(["open", "http://localhost"])
elif system_type == "Windows":
    chrome_proc = subprocess.Popen(["start", "", "http://localhost"], shell=True)
else:
    raise NotImplemented("Your OS is not supported yet!")

while True:
    code = input("Type Q and press Enter to terminate.\n")
    if code == "Q":
        server_proc.kill()
        exit()