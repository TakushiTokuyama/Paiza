package スキルチェック見本問題セット;

import java.util.Scanner;

class Main {
    public static void main(String[] args){
        q1();

    }

    // 掛け算
    private static void q1(){
        Scanner sc = new Scanner(System.in);
        Integer a = sc.nextInt();
        Integer b = sc.nextInt();
        System.out.println(a * b);

        sc.close();
    }
}