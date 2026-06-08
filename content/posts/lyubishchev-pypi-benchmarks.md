---
title: "We Put Lyubishchev on PyPI with interesting benchmarks"
date: 2026-06-07
draft: false
tags: ["python", "machine learning", "sklearn", "taxonomy", "open source"]
thumbnail: '/img/lyubishchev_benchmark.png'
slug: "lyubishchev-pypi-benchmarks"
description: "A 1943 Soviet manuscript. A Python library. And benchmarks showing where regularized-by-default QDA holds up where sklearn's own implementation falls over."
---

Last week I published a library called `lyubishchev` on PyPI. The previous article explained why — Alexander Lyubishchev developed multivariate classification methods in 1943, twenty years before the researchers whose names ended up in `scipy.spatial.distance`. The library was a citation as much as a tool

Then I ran actual benchmarks. The results were more interesting than I expected

---

## The Setup

Three standard sklearn datasets. Four classifiers. Five-fold stratified cross-validation

```python
from sklearn.datasets import load_iris, load_wine, load_breast_cancer
from sklearn.model_selection import cross_val_score, StratifiedKFold
from sklearn.discriminant_analysis import QuadraticDiscriminantAnalysis
from sklearn.discriminant_analysis import LinearDiscriminantAnalysis
from sklearn.naive_bayes import GaussianNB
from lyubishchev import LyubishchevClassifier

cv = StratifiedKFold(n_splits=5, shuffle=True, random_state=42)
```

No hyperparameter tuning. Default settings for everything except `LyubishchevClassifier(standardize=True)` — standardization on because the method requires features on comparable scales, same as any distance-based approach

---

## The Results

<div class="overflow-x-auto my-8">
  <table class="text-sm border-collapse w-full">
    <thead>
      <tr class="border-b-2 border-gray-200">
        <th class="text-left py-3 pr-8 font-semibold whitespace-nowrap">Dataset</th>
        <th class="text-right py-3 px-6 font-semibold whitespace-nowrap">Lyubishchev</th>
        <th class="text-right py-3 px-6 font-semibold whitespace-nowrap">QDA</th>
        <th class="text-right py-3 px-6 font-semibold whitespace-nowrap">LDA</th>
        <th class="text-right py-3 px-6 font-semibold whitespace-nowrap">GaussianNB</th>
      </tr>
    </thead>
    <tbody>
      <tr class="border-b border-gray-100">
        <td class="py-4 pr-8 text-gray-500 text-xs whitespace-nowrap">Iris · 150 samples · 4 features</td>
        <td class="text-right py-4 px-6 font-semibold whitespace-nowrap">0.9800 ± 0.0267</td>
        <td class="text-right py-4 px-6 font-semibold whitespace-nowrap">0.9800 ± 0.0267</td>
        <td class="text-right py-4 px-6 text-gray-500 whitespace-nowrap">0.9733 ± 0.0389</td>
        <td class="text-right py-4 px-6 text-gray-500 whitespace-nowrap">0.9467 ± 0.0400</td>
      </tr>
      <tr class="border-b border-gray-100">
        <td class="py-4 pr-8 text-gray-500 text-xs whitespace-nowrap">Wine · 178 samples · 13 features</td>
        <td class="text-right py-4 px-6 font-semibold whitespace-nowrap">0.9889 ± 0.0136</td>
        <td class="text-right py-4 px-6 font-semibold whitespace-nowrap">0.9889 ± 0.0136</td>
        <td class="text-right py-4 px-6 text-gray-500 whitespace-nowrap">0.9830 ± 0.0139</td>
        <td class="text-right py-4 px-6 text-gray-500 whitespace-nowrap">0.9719 ± 0.0252</td>
      </tr>
      <tr>
        <td class="py-4 pr-8 text-gray-500 text-xs whitespace-nowrap">Breast Cancer · 569 samples · 30 features</td>
        <td class="text-right py-4 px-6 whitespace-nowrap">0.9543 ± <strong>0.0035</strong></td>
        <td class="text-right py-4 px-6 font-semibold whitespace-nowrap">0.9561 ± 0.0055</td>
        <td class="text-right py-4 px-6 font-semibold whitespace-nowrap">0.9561 ± <span class="text-red-400">0.0200</span></td>
        <td class="text-right py-4 px-6 text-gray-500 whitespace-nowrap">0.9385 ± 0.0235</td>
      </tr>
    </tbody>
  </table>
</div>

---

## Run It Yourself

Three commands. You need Python installed, nothing else unusual

```bash
# Install the libraries
pip install lyubishchev scikit-learn

# Run the benchmark
python3 << 'EOF'
import warnings
import numpy as np
from sklearn.datasets import load_iris, load_wine, load_breast_cancer
from sklearn.model_selection import cross_val_score, StratifiedKFold
from sklearn.discriminant_analysis import QuadraticDiscriminantAnalysis, LinearDiscriminantAnalysis
from sklearn.naive_bayes import GaussianNB
from lyubishchev import LyubishchevClassifier

cv = StratifiedKFold(n_splits=5, shuffle=True, random_state=42)

datasets = {
    "Iris          ": load_iris(return_X_y=True),
    "Wine          ": load_wine(return_X_y=True),
    "Breast Cancer ": load_breast_cancer(return_X_y=True),
}

classifiers = {
    "LyubishchevClassifier": LyubishchevClassifier(standardize=True),
    "QDA (sklearn)        ": QuadraticDiscriminantAnalysis(),
    "LDA (sklearn)        ": LinearDiscriminantAnalysis(),
    "GaussianNB (sklearn) ": GaussianNB(),
}

for ds_name, (X, y) in datasets.items():
    print(f"\n{ds_name.strip()}")
    for clf_name, clf in classifiers.items():
        try:
            with warnings.catch_warnings():
                warnings.simplefilter("ignore")
                scores = cross_val_score(clf, X, y, cv=cv, scoring="accuracy")
            print(f"  {clf_name} {scores.mean():.4f} ± {scores.std():.4f}")
        except Exception:
            print(f"  {clf_name} CRASH")
EOF
```

You will see QDA complete all three datasets on sklearn 1.6+. The numbers should match the table above exactly — same random seed, same splits

---

## What Is Actually Happening on Breast Cancer

Breast Cancer is the interesting row. 30 features, 569 samples, many correlated measurements. This is where real data lives

On this dataset all three discriminant classifiers score within two tenths of a percent of each other on accuracy. The difference worth noting is that `LyubishchevClassifier` has the lowest standard deviation — `± 0.0035` versus QDA's `± 0.0055` and LDA's `± 0.0200`. More consistent predictions across folds

More importantly: this dataset exposes a version-dependent fragility in sklearn's own QDA

```python
from sklearn.discriminant_analysis import QuadraticDiscriminantAnalysis
qda_unsafe = QuadraticDiscriminantAnalysis(reg_param=0.0)
```

On sklearn 1.6, `QDA` applies a small silent regularization and runs. On sklearn 1.9+, it raises `ValueError: covariance matrix is not full rank` and crashes entirely. The behavior depends on which version you have installed — and you may not know which behaviour you are relying on until it breaks in production

`LyubishchevClassifier` applies `reg_covar` explicitly and by design. The regularization is not a patch — it is part of the method. Lyubishchev's 1943 formulation required a well-conditioned covariance matrix, so the diagonal ridge was structural from the start. The result is deterministic behaviour across sklearn versions: it fits, it predicts, and it does not change behaviour silently when you upgrade

---

## What This Is and Is Not

`LyubishchevClassifier` is mathematically equivalent to regularized QDA. It is not magic. On Iris and Wine — clean, low-feature datasets — it produces identical results to sklearn's QDA down to four decimal places, because the two methods are doing the same thing when the covariance is non-singular

The difference is robustness. Real datasets are not Iris. They have correlated features, more features than samples in some classes, and measurement scales that vary by orders of magnitude. `LyubishchevClassifier` was built for that reality, because that is the reality Lyubishchev was working in — flea beetle measurements with complex correlation structure, identified by a field entomologist with a ruler

---

## The API

It is fully sklearn-compatible. Passes `check_estimator`. Works inside `Pipeline` and `GridSearchCV`

```python
from lyubishchev import LyubishchevClassifier
import numpy as np

clf = LyubishchevClassifier(standardize=True, reg_covar=1e-6)
clf.fit(X_train, y_train)

labels = clf.predict(X_test)
proba  = clf.predict_proba(X_test)
score  = clf.score(X_test, y_test)

# Works in a Pipeline
from sklearn.pipeline import Pipeline
from sklearn.preprocessing import StandardScaler

pipe = Pipeline([
    ('scaler', StandardScaler()),
    ('clf', LyubishchevClassifier()),
])
pipe.fit(X_train, y_train)
```

The lower-level functions from the original release are still there:

```python
from lyubishchev import divergence_coefficient, scatter_ellipse, classify, transgression
```

---

## Install

```bash
pip install lyubishchev
```

Source: [github.com/AkzhanBerdi/lyubishchev](https://github.com/AkzhanBerdi/lyubishchev)

Primary source: Lyubishchev, A.A. (1943). *Programma obshchey sistematiki*. Manuscript, 22 November 1943. [zin.ru/animalia/coleoptera/rus/lyubis05.htm](http://www.zin.ru/animalia/coleoptera/rus/lyubis05.htm)

---

## What Is Next

The library is being submitted to [scikit-learn-contrib](https://github.com/scikit-learn-contrib/scikit-learn-contrib) — the official sklearn ecosystem for compatible packages. If you have used it, hit an issue, or want to contribute, the repo is open

An R port is also in progress

---

*Yours, Bad Dog*