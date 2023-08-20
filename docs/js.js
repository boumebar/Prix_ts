$(document).ready(function () {
    $("#button_ts").click(function () {
        var error = false
        var minutes = parseInt($("#minute").val())
        var bc = $("#bc").val();
        var echelon = $("#echelon").val()
        var compensation = $("#compensation").val();

        var prix_minute;
        var echelle = parseInt(bc + echelon);

        if (compensation == "NON") {
           
            switch (echelle) {
                case 12:
                    prix_minute = 0.2313
                    break;
                case 13:
                    prix_minute = 0.2352
                    break;
                case 14:
                    prix_minute = 0.2391
                    break;
                case 15:
                    prix_minute = 0.2429
                    break;
                case 16:
                    prix_minute = 0.2468
                    break;
                case 17:
                    prix_minute = 0.2506
                    break;
                case 18:
                    prix_minute = 0.2545
                    break;
                case 22:
                    prix_minute = 0.2387
                    break;
                case 23:
                    prix_minute = 0.2427
                    break;
                case 24:
                    prix_minute = 0.2467
                    break;
                case 25:
                    prix_minute = 0.2506
                    break;
                case 26:
                    prix_minute = 0.2546
                    break;
                case 27:
                    prix_minute = 0.2586
                    break;
                case 28:
                    prix_minute = 0.2626
                    break;
                case 32:
                    prix_minute = 0.2462
                    break;
                case 33:
                    prix_minute = 0.2503
                    break;
                case 34:
                    prix_minute = 0.2545
                    break;
                case 35:
                    prix_minute = 0.2585
                    break;
                case 36:
                    prix_minute = 0.2626
                    break;
                case 37:
                    prix_minute = 0.2668
                    break;
                case 38:
                    prix_minute = 0.2709
                    break;
                case 310:
                    prix_minute = 0.2790
                    break;
                case 311:
                    prix_minute = 0.2832
                    break;
                case 42:
                    prix_minute = 0.2537
                    break;
                case 43:
                    prix_minute = 0.2578
                    break;
                case 44:
                    prix_minute = 0.2621
                    break;
                case 45:
                    prix_minute = 0.2663
                    break;
                case 46:
                    prix_minute = 0.2706
                    break;
                case 47:
                    prix_minute = 0.2748
                    break;
                case 48:
                    prix_minute = 0.2790
                    break;
                case 410:
                    prix_minute = 0.2874
                    break;  
                case 411:
                    prix_minute = 0.2917
                    break;      
                case 52:
                    prix_minute = 0.2612
                    break;
                case 53:
                    prix_minute = 0.2655
                    break;
                case 54:
                    prix_minute = 0.2698
                    break;
                case 55:
                    prix_minute = 0.2742
                    break;
                case 56:
                    prix_minute = 0.2786
                    break;
                case 57:
                    prix_minute = 0.2829
                    break;
                case 58:
                    prix_minute = 0.2873
                    break;
                case 510:
                    prix_minute = 0.2960
                    break;  
                case 511:
                    prix_minute = 0.3003
                    break; 
                case 63:
                    prix_minute = 0.2712
                    break;
                case 64:
                    prix_minute = 0.2757
                    break;
                case 65:
                    prix_minute = 0.2802
                    break;
                case 66:
                    prix_minute = 0.2847
                    break;
                case 67:
                    prix_minute = 0.2893
                    break;
                case 68:
                    prix_minute = 0.2938
                    break;
                case 610:
                    prix_minute = 0.3028
                    break;  
                case 611:
                    prix_minute = 0.3073
                    break; 
                case 74:
                    prix_minute = 0.2821
                    break;
                case 75:
                    prix_minute = 0.2868
                    break;
                case 76:
                    prix_minute = 0.2915
                    break;
                case 77:
                    prix_minute = 0.2962
                    break;
                case 78:
                    prix_minute = 0.3008
                    break;
                case 710:
                    prix_minute = 0.3103
                    break;  
                case 711:
                    prix_minute = 0.3150
                    break; 
                case 84:
                    prix_minute = 0.2919
                    break;
                case 85:
                    prix_minute = 0.2967
                    break;
                case 86:
                    prix_minute = 0.3016
                    break;
                case 87:
                    prix_minute = 0.3064
                    break;
                case 88:
                    prix_minute = 0.3113
                    break;
                case 810:
                    prix_minute = 0.3211
                    break;  
                case 811:
                    prix_minute = 0.3259
                    break; 
                default:
                    var error = true;
                    console.log(`Désole BC${bc} avec echelon ${echelon}`);
            }
          } else {
            switch (echelle) {
                case 12:
                    prix_minute = 0.2709
                    break;
                case 13:
                    prix_minute = 0.2747
                    break;
                case 14:
                    prix_minute = 0.2786
                    break;
                case 15:
                    prix_minute = 0.2824
                    break;
                case 16:
                    prix_minute = 0.2863
                    break;
                case 17:
                    prix_minute = 0.2902
                    break;
                case 18:
                    prix_minute = 0.2940
                    break;
                case 22:
                    prix_minute = 0.2782
                    break;
                case 23:
                    prix_minute = 0.2822
                    break;
                case 24:
                    prix_minute = 0.2862
                    break;
                case 25:
                    prix_minute = 0.2902
                    break;
                case 26:
                    prix_minute = 0.2941
                    break;
                case 27:
                    prix_minute = 0.2981
                    break;
                case 28:
                    prix_minute = 0.3021
                    break;
                case 32:
                    prix_minute = 0.2857
                    break;
                case 33:
                    prix_minute = 0.2899
                    break;
                case 34:
                    prix_minute = 0.2940
                    break;
                case 35:
                    prix_minute = 0.2980
                    break;
                case 36:
                    prix_minute = 0.3022
                    break;
                case 37:
                    prix_minute = 0.3063
                    break;
                case 38:
                    prix_minute = 0.3104
                    break;
                case 310:
                    prix_minute = 0.3186
                    break;  
                case 311:
                    prix_minute = 0.3227
                    break; 
                case 42:
                    prix_minute = 0.2932
                    break;
                case 43:
                    prix_minute = 0.2974
                    break;
                case 44:
                    prix_minute = 0.3016
                    break;
                case 45:
                    prix_minute = 0.3058
                    break;
                case 46:
                    prix_minute = 0.3101
                    break;
                case 47:
                    prix_minute = 0.3143
                    break;
                case 48:
                    prix_minute = 0.3186
                    break;
                case 410:
                    prix_minute = 0.3270
                    break;  
                case 411:
                    prix_minute = 0.3312
                    break; 
                case 52:
                    prix_minute = 0.3007
                    break;
                case 53:
                    prix_minute = 0.3050
                    break;
                case 54:
                    prix_minute = 0.3094
                    break;
                case 55:
                    prix_minute = 0.3137
                    break;
                case 56:
                    prix_minute = 0.3181
                    break;
                case 57:
                    prix_minute = 0.3225
                    break;
                case 58:
                    prix_minute = 0.3268
                    break;
                case 510:
                    prix_minute = 0.3355
                    break;  
                case 511:
                    prix_minute = 0.3398
                    break; 
                case 63:
                    prix_minute = 0.3107
                    break;
                case 64:
                    prix_minute = 0.3152
                    break;
                case 65:
                    prix_minute = 0.3198
                    break;
                case 66:
                    prix_minute = 0.3242
                    break;
                case 67:
                    prix_minute = 0.3288
                    break;
                case 68:
                    prix_minute = 0.3333
                    break;
                case 610:
                    prix_minute = 0.3423
                    break;  
                case 611:
                    prix_minute = 0.3468
                    break; 
                case 74:
                    prix_minute = 0.3216
                    break;
                case 75:
                    prix_minute = 0.3263
                    break;
                case 76:
                    prix_minute = 0.3310
                    break;
                case 77:
                    prix_minute = 0.3357
                    break;
                case 78:
                    prix_minute = 0.3404
                    break;
                case 710:
                    prix_minute = 0.3498
                    break;  
                case 711:
                    prix_minute = 0.3545
                    break; 
                case 84:
                    prix_minute = 0.3314
                    break;
                case 85:
                    prix_minute = 0.3362
                    break;
                case 86:
                    prix_minute = 0.3411
                    break;
                case 87:
                    prix_minute = 0.3460
                    break;
                case 88:
                    prix_minute = 0.3508
                    break;
                case 810:
                    prix_minute = 0.3606
                    break;  
                case 811:
                    prix_minute = 0.3655
                    break; 
                default:
                    var error = true;
                    console.log(`Désole BC${bc} avec echelon ${echelon}`);
            }
          }

       
       

        function calcul_ts(minutes, prix_minute) {

            return (minutes * prix_minute)  * 1.25 

        }

    

        if (isNaN(minutes)) error = true

        if (error) {
            $("#error").removeClass('hidden')
            $("#resultat").addClass('hidden')

            if (isNaN(minutes)) {
                $("#error").html(
                    "Veuillez entrer un nombre valide sans virgule ni point"
                );
            } else {
                $("#error").html(
                    `Désole BC${bc} avec echelon ${echelon} n'existe pas `
                );
            }
        } else {

            $("#error").addClass('hidden')
            $("#resultat").removeClass('hidden')
            $("#resultat").html(
                `Pour <span>${minutes}</span> minutes vous percevrez <span>${(calcul_ts(minutes, prix_minute)).toFixed(2)}</span> euros`
            );
        }

    });
});