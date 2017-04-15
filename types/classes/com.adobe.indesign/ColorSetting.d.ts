/// <reference path="../../namespaces/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		/** Preference */
		class ColorSetting extends Adobe.Indesign.Preference {
			/**
			 * If true, uses LAB alternates for spot colors when available.
			 */
			public accurateLABSpots: boolean;
			/**
			 * The current color management system settings configuration. 
			 * Note: For information on possible values, see CMS settings 
			 * list.
			 */
			public cmsSettings: string;
			/**
			 * A list of valid color management system settings 
			 * configurations.
			 */
			public readonly cmsSettingsList: any;
			/** The file path of the CSF file to use. */
			public cmsSettingsPath: File;
			/**
			 * The policy for handling colors in a CMYK color model, 
			 * including reading and embedding color profiles, resolving 
			 * mismatches between embedded color profiles and the working 
			 * space, and moving colors between documents.
			 */
			public cmykPolicy: Adobe.Indesign.ColorSettingsPolicy;
			/** If true, enables color management. */
			public enableColorManagement: boolean;
			/**
			 * The color management module (CMM) for mapping color space 
			 * gamuts between documents.
			 */
			public engine: string;
			/** The available color engines. */
			public readonly engineList: any;
			/** A collection of event listeners. */
			public readonly eventListeners: Adobe.Indesign.EventListeners;
			/** A collection of events. */
			public readonly events: Adobe.Indesign.Events;
			/**
			 * If true, uses idealized black for CMYK-to-RGB or 
			 * CMYK-to-Gray conversions to print or export.
			 */
			public idealizedBlackToExport: boolean;
			/**
			 * If true, uses idealized black for CMYK-to-RGB or 
			 * CMYK-to-Gray conversions to the screen.
			 */
			public idealizedBlackToScreen: boolean;
			/** The default rendering intent. */
			public intent: Adobe.Indesign.DefaultRenderingIntent;
			/**
			 * Returns true if the object specifier resolves to valid 
			 * objects.
			 */
			public readonly isValid: boolean;
			/**
			 * If true, displays a prompt when opening a file whose 
			 * embedded color profile does not match the current working 
			 * space. The prompt provides the option to override the 
			 * default mismatch behavior.
			 */
			public mismatchAskWhenOpening: boolean;
			/**
			 * If true, displays a prompt when importing an object (via 
			 * pasting, drag-and-drop, or other similar methods) whose 
			 * colors do not match the current working space. The prompt 
			 * provides the option to override the default mismatch 
			 * behavior.
			 */
			public mismatchAskWhenPasting: boolean;
			/**
			 * If true, displays a prompt when opening a file that does not 
			 * have an embedded color profile. The prompt provides the 
			 * option to assign a color profile.
			 */
			public missingAskWhenOpening: boolean;
			/** The parent of the ColorSetting (a Application). */
			public readonly parent: any;
			/**
			 * A property that allows setting of several properties at the 
			 * same time.
			 */
			public properties: any;
			/**
			 * The policy for handling colors in an RGB color model, 
			 * including reading and embedding color profiles, handling 
			 * mismatches between embedded color profiles and the working 
			 * space, and moving colors from one document to another.
			 */
			public rgbPolicy: Adobe.Indesign.ColorSettingsPolicy;
			/**
			 * If true, uses black point compensation to ensure that shadow 
			 * detail is preserved by simulating the full dynamic range of 
			 * the output device.
			 */
			public useBPC: boolean;
			/** The current CMYK profile. */
			public workingSpaceCMYK: string;
			/** A list of valid CMYK color profiles. */
			public readonly workingSpaceCMYKList: any;
			/** The current RGB profile. */
			public workingSpaceRGB: string;
			/** A list of valid RGB color profiles. */
			public readonly workingSpaceRGBList: any;
			/**
			 * Adds an event listener.
			 * @param {string} eventTypeParam - The event type.
			 * @param {any} handlerParam - The event handler. Can accept: 
			 * File or JavaScript Function.
			 * @param {boolean} capturesParam - This parameter is obsolete. 
			 * (Optional)
			 */
			public addEventListenerColorSetting(eventTypeParam: string, handlerParam: any, capturesParam: boolean): Adobe.Indesign.EventListener;
			/**
			 * Resolves the object specifier, creating an array of object 
			 * references.
			 */
			public getElements(): any;
			/**
			 * Removes the event listener.
			 * @param {string} eventTypeParam - The registered event type.
			 * @param {any} handlerParam - The registered event handler. 
			 * Can accept: File or JavaScript Function.
			 * @param {boolean} capturesParam - This parameter is obsolete. 
			 * (Optional)
			 */
			public removeEventListenerColorSetting(eventTypeParam: string, handlerParam: any, capturesParam: boolean): boolean;
			/** Retrieves the object specifier. */
			public toSpecifier(): string;
		}
	}
}