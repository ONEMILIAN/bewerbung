#include <iostream>
#include <fstream>
#include <string>

int main(){
	int state = true;
	std::fstream f;
	std::string input;
	std::string inhalt;

	std::cout<<">Willkommen, q zum beenden, r zum lesen, d zum Datei leeren"<<std::endl<<std::endl;

	while(state){
		std::cout<<">Warte auf Eingabe"<<std::endl<<std::endl;

		std::cin>>input;

		if(input == "q"){
			state = false;
			std::cout<<">Beendet"<<std::endl;
		}
		else if(input == "r"){
			f.open("database.txt", std::ios::in);
			while(!f.eof()){
				std::getline(f, inhalt);
				std::cout<<inhalt<<std::endl;
			}
			f.close();
		}
		else if(input == "d"){
			f.open("database.txt", std::ios::out);
			f<<"";
			f.close();
			std::cout<<">Datenbank erfolgreich geleert!"<<std::endl<<std::endl;
		}
		else{
			f.open("database.txt", std::ios::app);
			f<<input<<std::endl;
			f.close();
			std::cout<<">"<<input<<" erfolgreich hinzugefuegt!"<<std::endl<<std::endl;
		}
	}
}
