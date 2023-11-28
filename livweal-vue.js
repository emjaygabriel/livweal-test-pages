new Vue({
    el: '#app',
    data: {
        current_chart: 0,
        is_view_result: false,
        somatic_wealth_chart: null,
        mental_wealth_chart: null,
        emotional_wealth_chart: null,
        interpersonal_wealth_chart: null,
        energetic_wealth_chart: null,
        financial_wealth_chart: null,
        final_result_chart: null,
        somatic_wealth_question1: 0,
        somatic_wealth_question2: 0,
        somatic_wealth_question3: 0,
        somatic_wealth_question4: 0,
        somatic_wealth_question5: 0,
        mental_wealth_question1: 0,
        mental_wealth_question2: 0,
        mental_wealth_question3: 0,
        mental_wealth_question4: 0,
        mental_wealth_question5: 0,
        emotional_wealth_question1: 0,
        emotional_wealth_question2: 0,
        emotional_wealth_question3: 0,
        emotional_wealth_question4: 0,
        emotional_wealth_question5: 0,
        interpersonal_wealth_question1: 0,
        interpersonal_wealth_question2: 0,
        interpersonal_wealth_question3: 0,
        interpersonal_wealth_question4: 0,
        interpersonal_wealth_question5: 0,
        energetic_wealth_question1: 0,
        energetic_wealth_question2: 0,
        energetic_wealth_question3: 0,
        energetic_wealth_question4: 0,
        energetic_wealth_question5: 0,
        financial_wealth_question1: 0,
        financial_wealth_question2: 0,
        financial_wealth_question3: 0,
        financial_wealth_question4: 0,
        financial_wealth_question5: 0,
        options: {
            slide_title: [
                "Somatic Wealth",
                "Mental Wealth",
                "Emotional Wealth",
                "Interpersonal Wealth",
                "Energetic Wealth",
                "Financial Wealth"
            ],
            questions: {
                somatic_wealth: [
                    "1. I eat health balance diet",
                    "2. I exercise atleast 3 times a week",
                    "3. I take responsibility for my physical health",
                    "4. I am generally free from illness",
                    "5. I have annual check-ups and specific medical checks as prescribed"
                ],
                mental_wealth: [
                    "I enjoy learning new skills and information",
                    "I have positive thoughts (low degree)",
                    "I am generally satisfied with my vocation/major",
                    "I commit time and energy to professional growth",
                    "I pursue mentally stimulating interests and hobbies"
                ],
                emotional_wealth: [
                    "1. I have a sense of control in my life and am able to adapt to change.",
                    "2. I perceived problems as opportunities for growth.",
                    "3. I am able to comfort or console myself when I am troubled.",
                    "4. I have a sense of fun and can laugh at myself,",
                    "5. Others would describe me as emotionally stable"
                ],
                interpersonal_wealth: [
                    "1. I have atleast three people with whom I have close.",
                    "2. I am able to resolve conflicts in all areas of my life.",
                    "3. I have satisfying social interactions with others.",
                    "4. I am aware of feelings of others and can respond appropriately",
                    "5. I have sense of belonging to a group or within organizations."
                ],
                energetic_wealth: [
                    "1. I have a sense of control in my life and am able to adapt to change.",
                    "2. I perceived problems as opportunities for growth.",
                    "3. I am able to comfort or console myself when I am troubled.",
                    "4. I have a sense of fun and can laugh at myself,",
                    "5. Others would describe me as emotionally stable"
                ],
                financial_wealth: [
                    "I enjoy learning new skills and information",
                    "I have positive thoughts (low degree)",
                    "I am generally satisfied with my vocation/major",
                    "I commit time and energy to professional growth",
                    "I pursue mentally stimulating interests and hobbies"
                ],

            }
        }
    },
    watch: {
        somatic_wealth_question1($value) { this.updateSomaticWealthData(); },
        somatic_wealth_question2($value) { this.updateSomaticWealthData(); },
        somatic_wealth_question3($value) { this.updateSomaticWealthData(); },
        somatic_wealth_question4($value) { this.updateSomaticWealthData(); },
        somatic_wealth_question5($value) { this.updateSomaticWealthData(); },

        mental_wealth_question1($value) { this.updateMentalWealthData(); },
        mental_wealth_question2($value) { this.updateMentalWealthData(); },
        mental_wealth_question3($value) { this.updateMentalWealthData(); },
        mental_wealth_question4($value) { this.updateMentalWealthData(); },
        mental_wealth_question5($value) { this.updateMentalWealthData(); },

        emotional_wealth_question1($value) { this.updateEmotionalWealthData(); },
        emotional_wealth_question2($value) { this.updateEmotionalWealthData(); },
        emotional_wealth_question3($value) { this.updateEmotionalWealthData(); },
        emotional_wealth_question4($value) { this.updateEmotionalWealthData(); },
        emotional_wealth_question5($value) { this.updateEmotionalWealthData(); },

        interpersonal_wealth_question1($value) { this.updateInterpersonalWealthData(); },
        interpersonal_wealth_question2($value) { this.updateInterpersonalWealthData(); },
        interpersonal_wealth_question3($value) { this.updateInterpersonalWealthData(); },
        interpersonal_wealth_question4($value) { this.updateInterpersonalWealthData(); },
        interpersonal_wealth_question5($value) { this.updateInterpersonalWealthData(); },

        energetic_wealth_question1($value) { this.updateEnergeticWealthData(); },
        energetic_wealth_question2($value) { this.updateEnergeticWealthData(); },
        energetic_wealth_question3($value) { this.updateEnergeticWealthData(); },
        energetic_wealth_question4($value) { this.updateEnergeticWealthData(); },
        energetic_wealth_question5($value) { this.updateEnergeticWealthData(); },

        financial_wealth_question1($value) { this.updateFinancialWealthData(); },
        financial_wealth_question2($value) { this.updateFinancialWealthData(); },
        financial_wealth_question3($value) { this.updateFinancialWealthData(); },
        financial_wealth_question4($value) { this.updateFinancialWealthData(); },
        financial_wealth_question5($value) { this.updateFinancialWealthData(); },
    },
    methods: {
        updateSomaticWealthData() {
            const $data = [
                this.somatic_wealth_question1,
                this.somatic_wealth_question2,
                this.somatic_wealth_question3,
                this.somatic_wealth_question4,
                this.somatic_wealth_question5
            ];
            this.somatic_wealth_chart.data.datasets[0].data = $data;
            this.somatic_wealth_chart.update();
        },
        updateMentalWealthData() {
            const $data = [
                this.mental_wealth_question1,
                this.mental_wealth_question2,
                this.mental_wealth_question3,
                this.mental_wealth_question4,
                this.mental_wealth_question5
            ];
            this.mental_wealth_chart.data.datasets[0].data = $data;
            this.mental_wealth_chart.update();  
        },
        updateEmotionalWealthData() {
            const $data = [
                this.emotional_wealth_question1,
                this.emotional_wealth_question2,
                this.emotional_wealth_question3,
                this.emotional_wealth_question4,
                this.emotional_wealth_question5
            ];
            this.emotional_wealth_chart.data.datasets[0].data = $data;
            this.emotional_wealth_chart.update();  
        },
        updateInterpersonalWealthData() {
            const $data = [
                this.interpersonal_wealth_question1,
                this.interpersonal_wealth_question2,
                this.interpersonal_wealth_question3,
                this.interpersonal_wealth_question4,
                this.interpersonal_wealth_question5
            ];
            this.interpersonal_wealth_chart.data.datasets[0].data = $data;
            this.interpersonal_wealth_chart.update();  
        },
        updateEnergeticWealthData() {
            const $data = [
                this.energetic_wealth_question1,
                this.energetic_wealth_question2,
                this.energetic_wealth_question3,
                this.energetic_wealth_question4,
                this.energetic_wealth_question5
            ];
            this.energetic_wealth_chart.data.datasets[0].data = $data;
            this.energetic_wealth_chart.update();  
        },
        updateFinancialWealthData() {
            const $data = [
                this.financial_wealth_question1,
                this.financial_wealth_question2,
                this.financial_wealth_question3,
                this.financial_wealth_question4,
                this.financial_wealth_question5
            ];
            this.financial_wealth_chart.data.datasets[0].data = $data;
            this.financial_wealth_chart.update();  
        },

        renderSomaticWealthWheel() {
            // Chart.js configuration
            const ctx = document.getElementById('somatic_wealth_chart').getContext('2d');
            const $data = [
                this.somatic_wealth_question1,
                this.somatic_wealth_question2,
                this.somatic_wealth_question3,
                this.somatic_wealth_question4,
                this.somatic_wealth_question5
            ]
            this.somatic_wealth_chart = new Chart(ctx, {
                type: 'polarArea',
                data: {
                    labels: ['1', '2', '3', '4', '5'],
                    datasets: [{
                        label: 'Sample Data Only',
                        data: $data,
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.8)',
                            'rgba(54, 162, 235, 0.8)',
                            'rgba(255, 255, 0, 0.8)',
                            'rgba(75, 192, 192, 0.8)',
                            'rgba(153, 102, 255, 0.8)'
                        ],
                        borderWidth: 1
                    }]
                },
                options: {
                    scale: {
                        ticks: {
                            beginAtZero: true,
                            steps: 0,
                            stepValue: 5,
                            max: 100,
                            suggestedMax: 100,
                            suggestedMin: 0
                        }
                    }
                }
            });
        },
        renderMentalWealthWheel() {
            // Chart.js configuration
            const ctx = document.getElementById('mental_wealth_chart').getContext('2d');
            const $data = [
                this.mental_wealth_question1,
                this.mental_wealth_question2,
                this.mental_wealth_question3,
                this.mental_wealth_question4,
                this.mental_wealth_question5
            ]
            this.mental_wealth_chart = new Chart(ctx, {
                type: 'polarArea',
                data: {
                    labels: ['1', '2', '3', '4', '5'],
                    datasets: [{
                        label: 'Sample Data Only',
                        data: $data,
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.8)',
                            'rgba(54, 162, 235, 0.8)',
                            'rgba(255, 255, 0, 0.8)',
                            'rgba(75, 192, 192, 0.8)',
                            'rgba(153, 102, 255, 0.8)'
                        ],
                        borderWidth: 1
                    }]
                },
                options: {
                    scale: {
                        ticks: {
                            beginAtZero: true,
                            steps: 0,
                            stepValue: 5,
                            max: 100,
                            suggestedMax: 100,
                            suggestedMin: 0
                        }
                    }
                }
            });
        },
        renderEmotionalWealthWheel() {
            // Chart.js configuration
            const ctx = document.getElementById('emotional_wealth_chart').getContext('2d');
            const $data = [
                this.emotional_wealth_question1,
                this.emotional_wealth_question2,
                this.emotional_wealth_question3,
                this.emotional_wealth_question4,
                this.emotional_wealth_question5
            ]
            this.emotional_wealth_chart = new Chart(ctx, {
                type: 'polarArea',
                data: {
                    labels: ['1', '2', '3', '4', '5'],
                    datasets: [{
                        label: 'Sample Data Only',
                        data: $data,
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.8)',
                            'rgba(54, 162, 235, 0.8)',
                            'rgba(255, 255, 0, 0.8)',
                            'rgba(75, 192, 192, 0.8)',
                            'rgba(153, 102, 255, 0.8)'
                        ],
                        borderWidth: 1
                    }]
                },
                options: {
                    scale: {
                        ticks: {
                            beginAtZero: true,
                            steps: 0,
                            stepValue: 5,
                            max: 100,
                            suggestedMax: 100,
                            suggestedMin: 0
                        }
                    }
                }
            });
        },
        renderInterpersonalWealthWheel() {
            // Chart.js configuration
            const ctx = document.getElementById('interpersonal_wealth_chart').getContext('2d');
            const $data = [
                this.interpersonal_wealth_question1,
                this.interpersonal_wealth_question2,
                this.interpersonal_wealth_question3,
                this.interpersonal_wealth_question4,
                this.interpersonal_wealth_question5
            ]
            this.interpersonal_wealth_chart = new Chart(ctx, {
                type: 'polarArea',
                data: {
                    labels: ['1', '2', '3', '4', '5'],
                    datasets: [{
                        label: 'Sample Data Only',
                        data: $data,
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.8)',
                            'rgba(54, 162, 235, 0.8)',
                            'rgba(255, 255, 0, 0.8)',
                            'rgba(75, 192, 192, 0.8)',
                            'rgba(153, 102, 255, 0.8)'
                        ],
                        borderWidth: 1
                    }]
                },
                options: {
                    scale: {
                        ticks: {
                            beginAtZero: true,
                            steps: 0,
                            stepValue: 5,
                            max: 100,
                            suggestedMax: 100,
                            suggestedMin: 0
                        }
                    }
                }
            });
        },
        renderEnergeticWealthWheel() {
            // Chart.js configuration
            const ctx = document.getElementById('energetic_wealth_chart').getContext('2d');
            const $data = [
                this.energetic_wealth_question1,
                this.energetic_wealth_question2,
                this.energetic_wealth_question3,
                this.energetic_wealth_question4,
                this.energetic_wealth_question5
            ]
            this.energetic_wealth_chart = new Chart(ctx, {
                type: 'polarArea',
                data: {
                    labels: ['1', '2', '3', '4', '5'],
                    datasets: [{
                        label: 'Sample Data Only',
                        data: $data,
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.8)',
                            'rgba(54, 162, 235, 0.8)',
                            'rgba(255, 255, 0, 0.8)',
                            'rgba(75, 192, 192, 0.8)',
                            'rgba(153, 102, 255, 0.8)'
                        ],
                        borderWidth: 1
                    }]
                },
                options: {
                    scale: {
                        ticks: {
                            beginAtZero: true,
                            steps: 0,
                            stepValue: 5,
                            max: 100,
                            suggestedMax: 100,
                            suggestedMin: 0
                        }
                    }
                }
            });
        },
        renderFinancialWealthWheel() {
            // Chart.js configuration
            const ctx = document.getElementById('financial_wealth_chart').getContext('2d');
            const $data = [
                this.financial_wealth_question1,
                this.financial_wealth_question2,
                this.financial_wealth_question3,
                this.financial_wealth_question4,
                this.financial_wealth_question5
            ]
            this.financial_wealth_chart = new Chart(ctx, {
                type: 'polarArea',
                data: {
                    labels: ['1', '2', '3', '4', '5'],
                    datasets: [{
                        label: 'Sample Data Only',
                        data: $data,
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.8)',
                            'rgba(54, 162, 235, 0.8)',
                            'rgba(255, 255, 0, 0.8)',
                            'rgba(75, 192, 192, 0.8)',
                            'rgba(153, 102, 255, 0.8)'
                        ],
                        borderWidth: 1
                    }]
                },
                options: {
                    scale: {
                        ticks: {
                            beginAtZero: true,
                            steps: 0,
                            stepValue: 5,
                            max: 100,
                            suggestedMax: 100,
                            suggestedMin: 0
                        }
                    }
                }
            });

            
        },
        renderFinalResult() {
            // Chart.js configuration
            const ctx = document.getElementById('final_result_chart').getContext('2d');
            const $data = [
                this.somatic_wealth_question1,
                this.somatic_wealth_question2,
                this.somatic_wealth_question3,
                this.somatic_wealth_question4,
                this.somatic_wealth_question5,
                this.mental_wealth_question1,
                this.mental_wealth_question2,
                this.mental_wealth_question3,
                this.mental_wealth_question4,
                this.mental_wealth_question5,
                this.emotional_wealth_question1,
                this.emotional_wealth_question2,
                this.emotional_wealth_question3,
                this.emotional_wealth_question4,
                this.emotional_wealth_question5,
                this.interpersonal_wealth_question1,
                this.interpersonal_wealth_question2,
                this.interpersonal_wealth_question3,
                this.interpersonal_wealth_question4,
                this.interpersonal_wealth_question5,
                this.energetic_wealth_question1,
                this.energetic_wealth_question2,
                this.energetic_wealth_question3,
                this.energetic_wealth_question4,
                this.energetic_wealth_question5,
                this.financial_wealth_question1,
                this.financial_wealth_question2,
                this.financial_wealth_question3,
                this.financial_wealth_question4,
                this.financial_wealth_question5,
            ]
            this.final_result_chart = new Chart(ctx, {
                type: 'polarArea',
                data: {
                    labels: ['1', '2', '3', '4', '5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30'],
                    datasets: [{
                        label: 'Sample Data Only',
                        data: $data,
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.8)',
                            'rgba(54, 162, 235, 0.8)',
                            'rgba(255, 255, 0, 0.8)',
                            'rgba(75, 192, 192, 0.8)',
                            'rgba(153, 102, 255, 0.8)',
                            'rgba(255, 99, 132, 0.8)',
                            'rgba(54, 162, 235, 0.8)',
                            'rgba(255, 255, 0, 0.8)',
                            'rgba(75, 192, 192, 0.8)',
                            'rgba(153, 102, 255, 0.8)',
                            'rgba(255, 99, 132, 0.8)',
                            'rgba(54, 162, 235, 0.8)',
                            'rgba(255, 255, 0, 0.8)',
                            'rgba(75, 192, 192, 0.8)',
                            'rgba(153, 102, 255, 0.8)',
                            'rgba(255, 99, 132, 0.8)',
                            'rgba(54, 162, 235, 0.8)',
                            'rgba(255, 255, 0, 0.8)',
                            'rgba(75, 192, 192, 0.8)',
                            'rgba(153, 102, 255, 0.8)',
                            'rgba(255, 99, 132, 0.8)',
                            'rgba(54, 162, 235, 0.8)',
                            'rgba(255, 255, 0, 0.8)',
                            'rgba(75, 192, 192, 0.8)',
                            'rgba(153, 102, 255, 0.8)',
                            'rgba(255, 99, 132, 0.8)',
                            'rgba(54, 162, 235, 0.8)',
                            'rgba(255, 255, 0, 0.8)',
                            'rgba(75, 192, 192, 0.8)',
                            'rgba(153, 102, 255, 0.8)'
                        ],
                        borderWidth: 1
                    }]
                },
                options: {
                    scale: {
                        ticks: {
                            beginAtZero: true,
                            steps: 0,
                            stepValue: 5,
                            max: 100,
                            suggestedMax: 100,
                            suggestedMin: 0
                        }
                    }
                }
            });

            $('#financial_wealth_slide').css('display', 'none');
            $('#final_result_slide').css('display','block');
            $('#nav_buttons').css('display', 'none');
            // this.is_view_result = true;
        },
        prevChart() {
            if(this.current_chart !== 0) {
                this.current_chart--;
                this.manageVisibility();
            }
        },
        nextChart() {
            if(this.current_chart !== 5) {
                this.current_chart++;
                this.manageVisibility();
            }
        },
        manageVisibility() {
            $('#somatic_wealth_slide').css('display', 'none');
            $('#mental_wealth_slide').css('display', 'none');
            $('#emotional_wealth_slide').css('display', 'none');
            $('#interpersonal_wealth_slide').css('display', 'none');
            $('#energetic_wealth_slide').css('display', 'none');
            $('#financial_wealth_slide').css('display', 'none');
            
            switch(this.current_chart) {
                case 0: 
                    $('#somatic_wealth_slide').css('display', 'block'); break;
                case 1:
                    $('#mental_wealth_slide').css('display', 'block'); break;
                case 2:
                    $('#emotional_wealth_slide').css('display', 'block'); break;
                case 3:
                    $('#interpersonal_wealth_slide').css('display', 'block'); break;
                case 4:
                    $('#energetic_wealth_slide').css('display', 'block'); break;
                case 5:
                    $('#financial_wealth_slide').css('display', 'block'); break;
            }
        }
    },
    mounted() {
        this.renderSomaticWealthWheel();
        this.renderMentalWealthWheel();
        this.renderEmotionalWealthWheel();
        this.renderInterpersonalWealthWheel();
        this.renderEnergeticWealthWheel();
        this.renderFinancialWealthWheel();
    }
});


var rangeSlider = function(){
    var slider = $('.range-slider'),
    range = $('.range-slider__range'),
    value = $('.range-slider__value');
        
    slider.each(function() {

        value.each(function(){
        var value = $(this).prev().attr('value');
            $(this).html(value);
        });

        range.on('input', function(){
            $(this).next(value).html(`${this.value}%`);
        });
    });
};

rangeSlider();