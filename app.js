/*

//ask why i cannot use container.length in this function
function classifyUniqueWords(words) {
    var container = {};
    for (var i = 0; i < words.length; i++) {
        if (words[i] in container) {
            container[words[i]]++;
        } else {
            container[words[i]] = 1;
        }
    }
    return container.length;
}

function averageWordLength(words) {
    var sum = 0;
    for (i = 0; i < words.length; i++) {
        sum = sum + words[i].length;
    }
    return sum / words.length;
}
*/

function createArrayOfWords(words) {
    return words.toLowerCase().match(/\b[^\s]+\b/g).sort();
}


function countAverageWordLength(words) {
    var total = words.join(" ").length;
    return (total / token.length).toFixed(2);
}

function countClassifyUniqueWords(words) {
    var container = {};
    for (var i = 0; i < words.length; i++) {
        if (container.indexOf(words[i]) === -1) {
            container.push(words[i]);
        }
    }
    return container.length;
}

function countAverageWordsPerSentences(words) {
    var numSentences = text.match(/[.!?]+/g) ? text.match(/[.!?]+/g).length : 1;
    return (token.length / numSentences).toFixed(2);
}
//what is this function for?
function removeReturns(text) {
    return text.replace(/\r?\n|\r/g, "");
}

function doTheAnalyze(words) {
    var token = createArrayOfWords(words);
    var totalWords = token.length;
    var classifyUniqueWords = countClassifyUniqueWords(token);
    var averageWordLength = countAverageWordLength(token);
    var averageWordsPerSentence = countAverageWordsPerSentences(token);

    var textReport = $('.js-text-report');
    textReport.find('.js-word-count').text(totalWords);
    textReport.find('.js-unique-word-count').text(classifyUniqueWords);
    textReport.find('.js-average-word-length').text(
        averageWordLength + " characters");
    textReport.find('.js-average-sentence-length').text(
        averageWordsPerSentence + " words");
    textReport.removeClass('hidden');
}


function watchFormSubmission() {
    $('.js-text-form').submit(function (event) {
        event.preventDefault();
        var userText = $(this).find('#user-text').val();
        doTheAnalyze(removeReturns(userText));
    });
}

$(function () {
    watchFormSubmission();

});
