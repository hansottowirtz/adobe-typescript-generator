/// <reference path="../../packages/com.adobe.flashpro/references.d.ts"/>

declare namespace Adobe {
	namespace Flashpro {
		/** Item of the preset panel. */
		class PresetItem extends Adobe.Csawlib.CSHostObject {
			/**
			 * This boolean is used to determine if a preset is one of the 
			 * ones we ship [which cannot be altered or moved] or one 
			 * created by a user.
			 * @type {boolean}
			 * @readonly
			 */
			public readonly isDefault: boolean;
			/**
			 * This boolean is used to determine if a presetItem is a 
			 * folder or a preset.
			 * @type {boolean}
			 * @readonly
			 */
			public readonly isFolder: boolean;
			/**
			 * This is the folder level (or indentation level) in the tree. 
			 * The Default Presets and Custom Presets folders are at level 
			 * 0.
			 * @type {number}
			 * @readonly
			 */
			public readonly level: number;
			/**
			 * This is the name property of the PresetItem. It is the label 
			 * in the Preset Panel for the preset. Read only: use the 
			 * propertyPanel's renameItem method to change the name.
			 * @type {string}
			 * @readonly
			 */
			public readonly name: string;
			/**
			 * This bool is used to determine which presetItem is open 
			 * (expanded) or closed.
			 * @type {boolean}
			 * @readonly
			 */
			public readonly open: boolean;
			/**
			 * This is the path property of the PresetItem. It is the 
			 * folder-inclusive path. Read only: use the propertyPanel's 
			 * renameItem method to change the name, or moveToFolder to 
			 * change the path.
			 * @type {string}
			 * @readonly
			 */
			public readonly path: string;
		}
	}
}