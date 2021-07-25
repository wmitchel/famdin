import { Story, Meta } from '@storybook/angular/types-6-0';
import { moduleMetadata } from '@storybook/angular';
import { Recipe } from 'src/app/models';
import { RecipeCardComponent } from './recipe-card.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

export default {
  title: 'Famdin/Recipe Card',
  component: RecipeCardComponent,
  decorators: [
    moduleMetadata({
      declarations: [RecipeCardComponent],
      imports: [MatCardModule, MatButtonModule],
    }),
  ],
} as Meta;

const Template: Story<RecipeCardComponent> = (args: RecipeCardComponent) => ({
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  recipe: {
    name: 'Seacliff Beggarticks',
    minutesToCook: 97,
    minutesToPrep: 76,
    image:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAIpSURBVDjLjZNPSFRRFMZ/9707o0SOOshM0x/JFtUmisKBooVEEUThsgi3KS0CN0G2lagWEYkSUdsRWgSFG9sVFAW1EIwQqRZiiDOZY804b967954249hUpB98y/PjO5zzKREBQCm1E0gDPv9XHpgTEQeAiFCDHAmCoBhFkTXGyL8cBIGMjo7eA3YDnog0ALJRFNlSqSTlcrnulZUVWV5elsXFRTHGyMLCgoyNjdUhanCyV9ayOSeIdTgnOCtY43DWYY3j9ulxkskkYRjinCOXy40MDAzcZXCyVzZS38MeKRQKf60EZPXSXInL9y+wLZMkCMs0RR28mJ2grSWJEo+lH9/IpNPE43GKxSLOOYwxpFIpAPTWjiaOtZ+gLdFKlJlD8u00xWP8lO/M5+e5efEB18b70VqjlMJai++vH8qLqoa+nn4+fJmiNNPCvMzQnIjzZuo1V88Ns3/HAcKKwfd9tNZorYnFYuuAMLDMfJ3m+fQznr7L0Vk9zGpLmezB4zx++YggqhAFEZ7n4ft+HVQHVMoB5++cJNWaRrQwMjHM9qCLTFcnJJq59WSIMLAopQDwfR/P8+oAbaqWK2eGSGxpxVrDnvQ+3s++4tPnj4SewYscUdUgIiilcM41/uXZG9kNz9h9aa+EYdjg+hnDwHDq+iGsaXwcZ6XhsdZW+FOqFk0B3caYt4Bic3Ja66NerVACOGttBXCbGbbWrgJW/VbnXbU6e5tMYIH8L54Xq0cq018+AAAAAElFTkSuQmCC',
    instructions: {
      description: 'Cutaneous chromomycosis',
      steps: [
        { stepNumber: 1, stepName: 'Twimm', description: 'Zoozzy' },
        { stepNumber: 2, stepName: 'Photobean', description: 'Thoughtblab' },
        { stepNumber: 3, stepName: 'Buzzshare', description: 'Izio' },
      ],
      stepName: 'Stringtough',
    },
    ingredients: [{ amount: 'S', name: 'Schinus polygamus (Cav.) Cabrera' }],
    numberOfServings: 1,
  } as Recipe,
};
