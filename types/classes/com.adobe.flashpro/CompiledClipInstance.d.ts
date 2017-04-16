/// <reference path="../../packages/com.adobe.flashpro/index.d.ts"/>

declare namespace Adobe {
	namespace Flashpro {
		/**
		 * CompiledClipInstance is a subclass of Element and contains 
		 * the following properties in addition to those in Element 
		 * (which is defined in the Timeline spec).  This is an 
		 * instance of a Matador v.2 Component. 
		 * '''''''''''''''''''''''''''''''''''''''''''''''''''''''''''s 
		 * esentially an instance of a MovieClip that has been 
		 * converted to a Compiled Clip library item.
		 */
		class CompiledClipInstance extends Adobe.Flashpro.Instance {
			/**
			 * Equivalent to the Name field in the Accessibility Panel. 
			 * Screen readers identify objects by reading the name aloud.
			 */
			public accName: string;
			/**
			 * String representing the ActionScript for this instance. 
			 * Behaves the same as symbolInstance.actionScript
			 */
			public actionScript: string;
			/**
			 * Equivalent to the Description field on the Accessibility 
			 * Panel. The description is read by the screen reader.
			 */
			public description: string;
			/**
			 * Enable/disable the children of the object to be accessible. 
			 * This is equivalent to the inverse logic of "Make Child 
			 * Objects Accessible" setting in the Accessibility Panel. 
			 * 
			 * forceSimple == true --> Make Child Object Accessible is 
			 * unchecked.
			 * 
			 * forceSimple == false --> Make Child Object Accessible is 
			 * checked.
			 */
			public forceSimple: boolean;
			/**
			 * This is equivalent to the Shortcut field on the 
			 * Accessibility Panel.
			 * 
			 * The shortcut is read by the screen readers.
			 * 
			 * This property is not available to dynamic text type.
			 */
			public shortcut: string;
			/**
			 * Enable/disable the object to be accessible. This is 
			 * equivalent to the inverse logic of "Make Object Accessible" 
			 * setting in the Accessibility Panel.
			 * 
			 * silent == true --> Make Object Accessible is unchecked.
			 * 
			 * silent == false --> Make Object Accessible is checked.
			 */
			public silent: boolean;
			/**
			 * This is equivalent to the Tab Index field on the 
			 * Accessibility Panel. UI available only in Flash MX 
			 * Professional 2004.
			 * 
			 * Creates a tab order in which objects are accessed when the 
			 * user presses the tab key.
			 */
			public tabIndex: number;
		}
	}
}