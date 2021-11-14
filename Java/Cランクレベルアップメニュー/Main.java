package Cランクレベルアップメニュー;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.time.LocalTime;
import java.util.ArrayList;
import java.util.Scanner;
import java.util.regex.Pattern;
import java.util.stream.IntStream;

class Main {
    public static void main(String[] args) {
        // q1_1();
        // q1_2();
        // q1_3();
        // q1_4();
        // q1_5();
        // q1_6();
        // q1_7();
        // q2_1();
        // q2_2();
        // q2_3();
        // q2_4();
        // q2_5();
        // q2_6();
        // q2_7();
    }

    // q1標準入出力
    // 単純な入出力
    private static void q1_1() {
        Scanner sc = new Scanner(System.in);

        String str = sc.nextLine();

        System.out.println(str);

        sc.close();
    }

    // 複数行にわたる出力
    private static void q1_2() {
        Scanner sc = new Scanner(System.in);

        int n = sc.nextInt();

        IntStream.range(0, n).forEach(i -> System.out.print("paiza"));

        sc.close();
    }

    // 複数行にわたる入力
    private static void q1_3() {
        Scanner sc = new Scanner(System.in);

        int n = sc.nextInt();

        for (int i = 0; i < n; i++) {
            System.out.println(sc.nextInt());
        }

        sc.close();
    }

    // 入力の配列による保持
    private static void q1_4() {
        Scanner sc = new Scanner(System.in);

        int n = sc.nextInt();

        int max = 0;
        for (int i = 0; i < n; i++) {

            int number = sc.nextInt();

            if (max < number) {
                max = number;
            }
        }

        System.out.println(max);

        sc.close();
    }

    // 半角スペース区切りでの出力
    private static void q1_5() {
        Scanner sc = new Scanner(System.in);

        int n = sc.nextInt();

        for (int i = 0; i < n; i++) {

            if (i == n - 1) {
                System.out.print("paiza");
            } else {
                System.out.print("paiza ");
            }
        }

        sc.close();
    }

    // 行区切りでの出力
    private static void q1_6() {
        Scanner sc = new Scanner(System.in);

        int n = sc.nextInt();
        sc.nextLine();

        String str = sc.nextLine();

        String[] strs = str.split(" ");

        for (String result : strs) {
            System.out.println(result);
        }

        sc.close();
    }

    // 標準入出力
    private static void q1_7() {
        BufferedReader reader = new BufferedReader(new InputStreamReader(System.in));

        try {
            int n = Integer.parseInt(reader.readLine());

            // Pattern p = Pattern.compile("[0-9]{2}|[0-9]{3}");

            ArrayList<String> list = new ArrayList<>();

            for (int i = 0; i < n; i++) {
                String[] strs = reader.readLine().split(" ");
                String str = "";

                // 名前に数値が含まれているデータが存在するため、以下の処理はランタイムエラーとなるため、コメントアウト。
                // for (int j = 0; j < strs.length; j++) {
                // if (p.matcher(strs[j]).find()) {
                // str += String.valueOf(" " + (Integer.parseInt(strs[j]) + 1));
                // } else {
                // str += strs[j];
                // }
                // }

                str += strs[0];

                str += String.valueOf(" " + (Integer.parseInt(strs[1]) + 1));

                list.add(str);
            }

            list.stream().forEach(i -> System.out.println(i));

            reader.close();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    // 整数と文字列
    private static void q2_1() {
        BufferedReader reader = new BufferedReader(new InputStreamReader(System.in));

        try {
            int n = Integer.valueOf(reader.readLine());

            ArrayList<String> list = new ArrayList<>();

            for (int i = 0; i < n; i++) {
                String str = reader.readLine();
                list.add(str);
            }

            list.stream().forEach(i -> System.out.println(i.length()));
            reader.close();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    // 部分文字列
    private static void q2_2() {
        BufferedReader reader = new BufferedReader(new InputStreamReader(System.in));

        try {
            ArrayList<String> list = new ArrayList<>();

            for (int i = 0; i < 2; i++) {
                String str = reader.readLine();
                list.add(str);
            }

            if (list.get(1).contains(list.get(0))) {
                System.out.println("YES");
            } else {
                System.out.println("NO");
            }
            ;

            reader.close();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    // 数字の文字列操作
    private static void q2_3() {
        BufferedReader reader = new BufferedReader(new InputStreamReader(System.in));

        try {
            String s = reader.readLine();

            String[] slist = s.split("");

            String a1 = String.valueOf(Integer.parseInt(slist[0]) + Integer.parseInt(slist[3]));

            String a2 = String.valueOf(Integer.parseInt(slist[1]) + Integer.parseInt(slist[2]));

            System.out.println(a1 + a2);

            reader.close();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    // 数字の文字列操作
    private static void q2_4() {
        BufferedReader reader = new BufferedReader(new InputStreamReader(System.in));

        try {
            String s = reader.readLine();

            System.out.println(String.format("%03d", Integer.parseInt(s)));

            reader.close();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    // 数字の文字列操作
    private static void q2_5() {
        BufferedReader reader = new BufferedReader(new InputStreamReader(System.in));

        try {
            String s = reader.readLine();

            String[] slist = s.split(":");

            for (String str : slist) {
                System.out.println(Integer.parseInt(str));
            }

            reader.close();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    // 数字の文字列操作
    private static void q2_6() {
        BufferedReader reader = new BufferedReader(new InputStreamReader(System.in));
        try {
            String s = reader.readLine();

            String[] slist = s.split(":");

            String result = "";

            if (30 <= Integer.parseInt(slist[1])) {
                if (23 <= Integer.parseInt(slist[0])) {
                    result += "00";
                }else{
                    result += String.format("%02d", Integer.parseInt(slist[0]) + 1);
                }
                result += ":" + String.format("%02d", -1 * (30 - Integer.parseInt(slist[1])));
            }else{
                result += slist[0] + ":" +  (30 + Integer.parseInt(slist[1]));
            }

            System.out.println(result);

            // minutes 30 -x

            // hour +1 23 - 01

            reader.close();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    // 文字列
    private static void q2_7(){
        BufferedReader reader = new BufferedReader(new InputStreamReader(System.in));

        try {

            int n = Integer.parseInt(reader.readLine());

            String[] list = new String[n]; 

            for (int i = 0; i < n; i++) {
                String str = reader.readLine();
                list[i] = str;
            }

            for(int i = 0; i < list.length; i++){
                String[] strs = list[i].split(" ");

                String [] startTime = strs[0].split(":");

                System.out.println(LocalTime.of(Integer.parseInt(startTime[0]), Integer.parseInt(startTime[1])).plusHours(Integer.parseInt(strs[1])).plusMinutes(Integer.parseInt(strs[2])));
            }

            reader.close();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}