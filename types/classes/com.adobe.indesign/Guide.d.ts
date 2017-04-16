/// <reference path="../../packages/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class Guide extends Adobe.Csawlib.CSHostObject {
			/**
			 * Dispatched after a Guide is placed. This event bubbles. This 
			 * event is not cancelable.
			 */
			public static readonly AFTER_PLACE: string;
			/** If true, the master page item can be overridden. */
			public allowOverrides: boolean;
			/** A collection of event listeners. */
			public readonly eventListeners: Adobe.Indesign.EventListeners;
			/** A collection of events. */
			public readonly events: Adobe.Indesign.Events;
			/**
			 * If true, horizontal orientation guides stop at the edges of 
			 * the specified page. If false, the guides extends across the 
			 * width of the spread and into the pasteboard area.
			 */
			public fitToPage: boolean;
			/**
			 * The color of the guide, specified either as an array of 
			 * three doubles, each in the range 0 to 255 and representing 
			 * R, G, and B values, or as a UI color. Can return: Array of 3 
			 * Reals (0 - 255) or UIColors enumerator.
			 */
			public guideColor: any;
			/** The type of the guide. */
			public guideType: Adobe.Indesign.GuideTypeOptions;
			/** The zone of the guide. */
			public guideZone: any;
			/** The unique ID of the Guide. */
			public readonly id: number;
			/** The index of the Guide within its containing object. */
			public readonly index: number;
			/**
			 * Returns true if the object specifier resolves to valid 
			 * objects.
			 */
			public readonly isValid: boolean;
			/** The layer that the Guide is on. */
			public itemLayer: Adobe.Indesign.Layer;
			/** A property that can be set to any string. */
			public label: string;
			/**
			 * The location at which to place the guide relative to the 
			 * current ruler zero point.
			 */
			public location: any;
			/** If true, the Guide is locked. */
			public locked: boolean;
			/**
			 * The name of the Guide; this is an alias to the Guide's label 
			 * property.
			 */
			public name: string;
			/** The orientation of the guide. */
			public orientation: Adobe.Indesign.HorizontalOrVertical;
			/**
			 * If true, the object originated on a master spread and was 
			 * overridden. If false, the object either originated on a 
			 * master spread and was not overridden, or the object did not 
			 * originate on a master page.
			 */
			public readonly overridden: boolean;
			/**
			 * An object that originated on a master page and has been 
			 * overridden. Can return: PageItem, Guide, Graphic, Movie or 
			 * Sound.
			 */
			public readonly overriddenMasterPageItem: any;
			/** The parent of the Guide (a Spread or MasterSpread). */
			public readonly parent: any;
			/** The page on which this page item appears. */
			public readonly parentPage: Adobe.Indesign.Page;
			/**
			 * A property that allows setting of several properties at the 
			 * same time.
			 */
			public properties: any;
			/**
			 * The view magnification as a percentage below which guides 
			 * are no longer displayed. (Range: 5.0 to 4000.0)
			 */
			public viewThreshold: number;
			/**
			 * Adds an event listener.
			 * @param {string} eventTypeParam The event type.
			 * @param {any} handlerParam The event handler. Can accept: 
			 * File or JavaScript Function.
			 * @param {boolean} capturesParam This parameter is obsolete. 
			 * (Optional)
			 */
			public addEventListenerGuide(eventTypeParam: string, handlerParam: any, capturesParam: boolean): Adobe.Indesign.EventListener;
			/**
			 * Detaches an overridden master page item from the master 
			 * page.
			 */
			public detach(): void;
			/** Duplicates the Guide. */
			public duplicate(): Adobe.Indesign.Guide;
			/**
			 * Gets the label value associated with the specified key.
			 * @param {string} keyParam The key.
			 */
			public extractLabel(keyParam: string): string;
			/**
			 * Resolves the object specifier, creating an array of object 
			 * references.
			 */
			public getElements(): any;
			/**
			 * Sets the label to the value associated with the specified 
			 * key.
			 * @param {string} keyParam The key.
			 * @param {string} valueParam The value.
			 */
			public insertLabel(keyParam: string, valueParam: string): void;
			/**
			 * Moves the guide to a new location. Note: Either the to or 
			 * the by parameter is required; if both parameters are 
			 * defined, only the to value is used.
			 * @param {any[]} toParam The new location of the guide, in the 
			 * format [x, y]. (Optional)
			 * @param {any[]} byParam The amount to move the guide relative 
			 * to its current position, in the format [x, y]. (Optional)
			 */
			public move(toParam: any[], byParam: any[]): void;
			/**
			 * Overrides a master page item and places the item on the 
			 * document page as a new object.
			 * @param {Page} destinationPageParam The document page that 
			 * contains the master page item to override.
			 */
			public override(destinationPageParam: Page): any;
			/** Deletes the Guide. */
			public remove(): void;
			/**
			 * Removes the event listener.
			 * @param {string} eventTypeParam The registered event type.
			 * @param {any} handlerParam The registered event handler. Can 
			 * accept: File or JavaScript Function.
			 * @param {boolean} capturesParam This parameter is obsolete. 
			 * (Optional)
			 */
			public removeEventListenerGuide(eventTypeParam: string, handlerParam: any, capturesParam: boolean): boolean;
			/**
			 * Removes the override from a previously overridden master 
			 * page item.
			 */
			public removeOverride(): void;
			/**
			 * Get the coordinates of the given location in the specified 
			 * coordinate system.
			 * @param {any} locationParam The location requested. Can 
			 * accept: Array of 2 Reals, AnchorPoint enumerator or Array of 
			 * Arrays of 2 Reals, CoordinateSpaces enumerators, AnchorPoint 
			 * enumerators, BoundingBoxLimits enumerators or Long Integers.
			 * @param {CoordinateSpaces} inParam The coordinate space to 
			 * use.
			 * @param {boolean} consideringRulerUnitsParam If true then a 
			 * ruler location is interpreted using ruler units rather than 
			 * points. The default value is false. This parameter has no 
			 * effect unless the reference point is specified relative to a 
			 * page. (Optional)
			 */
			public resolve(locationParam: any, inParam: CoordinateSpaces, consideringRulerUnitsParam: boolean): any;
			/**
			 * Selects the object.
			 * @param {SelectionOptions} existingSelectionParam The 
			 * selection status of the Guide in relation to previously 
			 * selected objects. (Optional)
			 */
			public select(existingSelectionParam: SelectionOptions): void;
			/** Retrieves the object specifier. */
			public toSpecifier(): string;
			/**
			 * Get the transformation values of the page item.
			 * @param {CoordinateSpaces} inParam The coordinate space to 
			 * use
			 */
			public transformValuesOf(inParam: CoordinateSpaces): any;
		}
	}
}