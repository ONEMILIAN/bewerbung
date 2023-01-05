state = "on"

def getResult(eingabe1, eingabe2):
    if eingabeOperator == "*":
        return eingabe1 * eingabe2
    elif eingabeOperator == "-":
        return eingabe1 - eingabe2
    elif eingabeOperator == "+":
        return eingabe1 + eingabe2
    elif eingabeOperator == "/" or "%":
        return eingabe1 / eingabe2


print("Willkommen in der TaschenrechnerApp! Geben sie eine Zahl ein \n")
while state == "on":
    eingabeZahl1 = input()
    print("Nun geben sie einen Operator an. \n")
    eingabeOperator = input()
    print("Geben sie als letztes eine zweite Zahl an. \n")
    eingabeZahl2 = input()
    print("Ergebnis ist: ", getResult(int(eingabeZahl1), int(eingabeZahl2)))

