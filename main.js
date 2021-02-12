import { basicFunctions } from './basic_alogirthm_scripting'
import { intermediateFunctions } from './intermediate_algorithm_scripting'

document.open();
document.write("<p> reverse_string : " + basicFunctions.reverse_string("hello world") + "</p>");
document.write("<p>spinalCaseSplit : " + intermediateFunctions.spinalCaseSplit("hello world") + "</p>");
document.close();