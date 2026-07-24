# Mean / median / mode practice helpers

from collections import Counter
import math


def mean(nums):
    return sum(nums) / len(nums)


def median(nums):
    s = sorted(nums)
    n = len(s)
    mid = n // 2
    if n % 2 == 1:
        return s[mid]
    return (s[mid - 1] + s[mid]) / 2


def mode(values):
    return Counter(values).most_common(1)[0][0]


def stdev(nums):
    m = mean(nums)
    return math.sqrt(sum((x - m) ** 2 for x in nums) / len(nums))


if __name__ == "__main__":
    scores = [70, 80, 90, 100, 80]
    print("mean", mean(scores))
    print("median", median(scores))
    print("mode", mode(scores))
    print("stdev", round(stdev(scores), 2))
