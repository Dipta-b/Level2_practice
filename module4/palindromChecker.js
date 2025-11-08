//alphanumeric jayga gulo badd diye case gloke 
//!left side theke center and right theke center e ashbo jodi dui pash milae tile palindrome.
const isPalindrome = (str) => {
    const normalized = str.toLowerCase().replace(/[^a-z0-9]/g, "");
    const reversed = normalized.split("").reversed.join("");

    if (reversed === normalized) {
        return true;
    }
    return false;
}

const isPlaindromeTwopointer = () => {
    const normalized = str.toLowerCase().replace(/[^a-z0-9]/g, "");

    let left = 0;
    let right = normalized.length - 1;

    while (left < right) {
        if (normalized[left] !== normalized[right]) {
            return false
        }
        left++;
        right--;
    }
    return true;

}