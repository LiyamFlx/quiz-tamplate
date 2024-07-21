const steps = document.querySelectorAll('.quiz-step');
let currentStep = 0;

function nextStep() {
    if (currentStep < steps.length - 1) {
        steps[currentStep].classList.remove('active');
        currentStep++;
        steps[currentStep].classList.add('active');
        updateProgressBar();

        if (currentStep === 1) {
            deriveWeights();
        }
    }
}

function previousStep() {
    if (currentStep > 0) {
        steps[currentStep].classList.remove('active');
        currentStep--;
        steps[currentStep].classList.add('active');
        updateProgressBar();
    }
}

function updateProgressBar() {
    const progress = ((currentStep + 1) / steps.length) * 100;
    document.querySelector('.progress-bar div').style.width = `${progress}%`;
}

function deriveWeights() {
    const S = parseFloat(document.querySelector('input[name="sizeOpportunity"]:checked').value);
    const P = parseFloat(document.querySelector('input[name="potentialImpact"]:checked').value);
    const D = parseFloat(document.querySelector('input[name="difficultyExecution"]:checked').value);
    const C = parseFloat(document.querySelector('input[name="challengeConstruction"]:checked').value);

    document.getElementById('weightSizeOpportunity').value = deriveWeight(S).toFixed(2);
    document.getElementById('weightPotentialImpact').value = deriveWeight(P).toFixed(2);
    document.getElementById('weightDifficultyExecution').value = deriveWeight(D).toFixed(2);
    document.getElementById('weightChallengeConstruction').value = deriveWeight(C).toFixed(2);
}

function deriveWeight(value) {
    return value / 10; // Assuming the maximum value is 10
}

function calculateImpact() {
    const S = parseFloat(document.querySelector('input[name="sizeOpportunity"]:checked').value);
    const P = parseFloat(document.querySelector('input[name="potentialImpact"]:checked').value);
    const D = parseFloat(document.querySelector('input[name="difficultyExecution"]:checked').value);
    const C = parseFloat(document.querySelector('input[name="challengeConstruction"]:checked').value);

    const w_S = parseFloat(document.getElementById('weightSizeOpportunity').value);
    const w_P = parseFloat(document.getElementById('weightPotentialImpact').value);
    const w_D = parseFloat(document.getElementById('weightDifficultyExecution').value);
    const w_C = parseFloat(document.getElementById('weightChallengeConstruction').value);

    const impact = (w_S * S) + (w_P * P) - (w_D * D + w_C * C);

    const resultDiv = document.getElementById('quizResult');
    resultDiv.innerHTML = `<p>Your impact score: ${impact.toFixed(2)}</p>`;
    resultDiv.style.display = 'block';
}
