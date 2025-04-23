// See https://aka.ms/new-console-template for more information

string yourname = "Charlotte Wiltshire";
string[] firstLast = yourname.Split(' ');
//그냥 firstLast를 콘솔로 찍으면 System.String[]가 나온다.
//그리고 문자열을 문자로 나눠서 배열화 시키려면 split("")를 쓰면 안 된다. 불가능하다.
//문자배열로 만드는 시행착오.
// string[] nameChar = yourname.Split("");
// string[] nameChar = yourname.Split();
// string[] nameChar = yourname.ToCharArray();
char[] nameChar = yourname.ToCharArray();
//배열을 뒤집는 법. 시행착오.
// Console.WriteLine(nameChar.reverse());
// Console.WriteLine(Array.reverse(nameChar));
// Console.WriteLine(Array.Reverse(nameChar));
// Console.WriteLine("이것은"+ nameChar);
// PrintArray(nameChar); //배열을 출력하는 메소드 같은데.
Array.Reverse(nameChar);

Console.WriteLine(yourname);
// Console.WriteLine(firstLast[0]);
// Console.WriteLine(firstLast[1]);
// for(int i=0; i<2; i++){
//     Console.WriteLine(firstLast[i]);
// }
// for(int j=0; j<nameChar.Length; j++){
//     Console.WriteLine(nameChar[j]);
// }
// for(int j=0; j<nameChar.Length; j++){
//     Console.WriteLine(nameChar[j]);
// }
Console.WriteLine(nameChar);
string name1 = string.Concat(nameChar);
string name2 = new string(nameChar);
Console.WriteLine("이건 concat: "+name1);
Console.WriteLine("이건 new string: "+name2);


