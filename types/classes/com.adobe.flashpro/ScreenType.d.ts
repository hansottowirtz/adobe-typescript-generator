/// <reference path="../../packages/com.adobe.flashpro/index.d.ts"/>

declare namespace Adobe {
	namespace Flashpro {
		/**
		 * INTERNAL ONLY; The Type object represents a single Screen 
		 * Type in the JS object model.
		 */
		class ScreenType extends Adobe.Csawlib.CSHostObject {
			/** The name of the Screen Type. */
			public readonly name: string;
			/**
			 * The version of the Screen Type. Should only be values like 
			 * this: "1.0" or "2.0" or "1.3" etc.
			 */
			public readonly version: string;
			/**
			 * closeWizardDialog closes the prior wizard. If there are no 
			 * wizards left in the stack, the dialog box will close. 
			 * JS_FALSE is returned if you are trying to close a dialog 
			 * that is not last in the stack.
			 */
			public closeWizardDialog_(): void;
			/**
			 * If there is a jsfl doc associated with this screen type, 
			 * return the object that references its DOM. Most useful when 
			 * calling a function in the jsfl file from the screen type's 
			 * wizard SWF.
			 */
			public getJSFLContext(): any;
			/** Invoke the Screen Type wizard. */
			public invoke(): void;
			/**
			 * Open the wizard dialog of the Screen Type. If the Screen 
			 * Type does not have a swf implementation for the dialog, then 
			 * none will be opened.
			 * 
			 * The openWizardDialog method can be called multiple times and 
			 * the dialog box will "stack" multiple implementations inside. 
			 * Call closeWizardDialog() when finished to balance the stack 
			 * and pop the dialog off of the stack.
			 */
			public openWizardDialog(): void;
		}
	}
}