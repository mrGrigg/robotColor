define(['jquery'], function ($) {
    var methods = {
        initialize: function (element) {
            //scope the functions
            var _this = this;

            //Save the text of the element
            var text = element.text();

            //Create an array based on the text
            var rcArray = text.split('');
            
            //Empty the element
            element.empty();

            //Create a div array for each element
            $.each(rcArray, function (index, value) {
                element.append('<span class="letter robot-' + index + '">' + value + '</span>');
            });
            
            element.addClass('robotColor');
            element.css({
                'width': rcArray.length * 40 + 'px'
            })

            //Get the color array
            var robotColorsArray = this.generateColorArray(rcArray.length);

            //Set the rotateInterval
            setInterval(function () {
                _this.rotateColors(robotColorsArray);
            }, 325);            
        },

        generateColorArray: function(arrayLength) {
            //build an array of robot colors
            var returnArray = [];
            for (i = 0; i < arrayLength; i++) {
                //Mad craziness: http://paulirish.com/2009/random-hex-color-code-snippets/
                returnArray[i] = '#' + Math.floor(Math.random() * 16777215).toString(16);
            }
            return returnArray;            
        },

        sortValue: function() {
            return Math.round(Math.random()) - 0.5;
        },

        rotateColors: function(colorArray) {
            colorArray.sort(this.sortValue);
            for (i = 0; i <= colorArray.length; i++) {
                $('.robot-' + i).css("background-color", colorArray[i]);
            }
        }
    };

    $.fn.robotColor = function () {
        methods.initialize(this);

        return this;
    };
});