# shadowrun
- material ui
  - classNames on custom components dont work.
    - need atleast 2 layers deep of specificity.
  - spacing
    - focus on consistent spacing width rather than column width.
    - margins and columns follow 8px square baseline grid.
    - spacing property INT between 0-10 inclusive
    -default spacing algo = output(spacing) = spacing * 8px.
      - example `spacing={3}` makes 24px wide gap.
    - you can create custom spacing.
      - const theme = createMuiTheme();
        - theme.spacing(2) // 8*2
        - not interesting yet.
      - you can pass a function.
        - ```const theme = createMuiTheme({
          spacing: x => `${0.25}rem`
        });```
        - ```theme.spacing(2); // 0.25 * 2rem = 0.5rem = 8px;```
      - or if things get really hairy you could pass an array
        - ``` const theme = createMuiTheme({
          spacing: [0,4,5,6,23]
          });```
        -   ```theme.spacing(2) // = 5```
        - i bet i could pass funcs as values in that array if it really got scary 
  - grid
  - textfield
  - box
  -tooltip
- jest
- enzyme