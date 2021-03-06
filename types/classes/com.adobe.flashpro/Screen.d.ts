/// <reference path="../../packages/com.adobe.flashpro/references.d.ts"/>

declare namespace Adobe {
	namespace Flashpro {
		/**
		 * The Screen object represents a single screen in a slide or 
		 * form document.  The Screen object contains properties 
		 * related to the slide or form.  The array of all the Screen 
		 * objects in the document can be accessed from 
		 * screenOutline.screens.
		 */
		class Screen extends Adobe.Csawlib.CSHostObject {
			/**
			 * Equivalent to the Name field in the Accessibility Panel. 
			 * Screen readers identify objects by reading the name aloud.
			 * @type {string}
			 */
			public accName: string;
			/**
			 * The array of child screens for this screen.  Empty if there 
			 * are no child screens.
			 * @type {any[]}
			 * @readonly
			 */
			public readonly childScreens: any[];
			/**
			 * Equivalent to the Description field on the Accessibility 
			 * Panel. The description is read by the screen reader.
			 * @type {string}
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
			 * @type {boolean}
			 */
			public forceSimple: boolean;
			/**
			 * The hide property of the screen specifies visibility of a 
			 * screen.  A screen with the hide property set to true will 
			 * not be visible in any other screen.
			 * @type {boolean}
			 */
			public hidden: boolean;
			/**
			 * The name used to access the object from ActionScript.
			 * @type {string}
			 * @readonly
			 */
			public readonly instanceName: string;
			/**
			 * The name of the screen.
			 * @type {string}
			 * @readonly
			 */
			public readonly name: string;
			/**
			 * The next peer screen in the parent's childScreen array.  If 
			 * there's not a peer screen, the value should be NULL.
			 * @type {any}
			 * @readonly
			 */
			public readonly nextScreen: any;
			/**
			 * The AS 2.0 properties accessable from the Screens PI.
			 * @type {any}
			 * @readonly
			 */
			public readonly parameters: any;
			/**
			 * The parent screen for nested screens.  If parentScreen is 
			 * NULL, the screen is a top level screen.
			 * @type {any}
			 * @readonly
			 */
			public readonly parentScreen: any;
			/**
			 * The previous peer screen in the parent's childScreen array. 
			 * If there are no peer screens, then the value should be NULL.
			 * @type {any}
			 * @readonly
			 */
			public readonly prevScreen: any;
			/**
			 * name of the screen Type that created this screen
			 * @type {string}
			 */
			public screenType: string;
			/**
			 * version of the template that created this screen
			 * @type {string}
			 */
			public screenTypeVersion: string;
			/**
			 * Enable/disable the object to be accessible. This is 
			 * equivalent to the inverse logic of "Make Object Accessible" 
			 * setting in the Accessibility Panel.
			 * 
			 * silent == true --> Make Object Accessible is unchecked.
			 * 
			 * silent == false --> Make Object Accessible is checked.
			 * @type {boolean}
			 */
			public silent: boolean;
			/**
			 * This is equivalent to the Tab Index field on the 
			 * Accessibility Panel. UI available only in Flash MX 
			 * Professional 2004.
			 * 
			 * Creates a tab order in which objects are accessed when the 
			 * user presses the tab key.
			 * @type {number}
			 */
			public tabIndex: number;
			/**
			 * The timeline object for the screen.
			 * @type {Adobe.Flashpro.Timeline}
			 * @readonly
			 */
			public readonly timeline: Adobe.Flashpro.Timeline;
		}
	}
}