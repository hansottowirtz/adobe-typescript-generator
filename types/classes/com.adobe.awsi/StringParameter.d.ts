/// <reference path="../../packages/com.adobe.awsi/references.d.ts"/>

declare namespace Adobe {
	namespace Awsi {
		/**
		 * A class for representing String parameters to be  sent in 
		 * HTTP requests. The String parameter value will be sent   
		 * with a content-type of 'text/plain; charset=UTF-8' and   an 
		 * 8bit transfer encoding. This may be overridden in 
		 * subclasses.
		 */
		class StringParameter extends Adobe.Awsi.AbstractParameter {
			
		}
	}
}