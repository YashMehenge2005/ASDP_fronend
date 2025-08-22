# ASDP (AI Survey Data Processor) Application

## Ministry of Statistics and Programme Implementation (MoSPI)

### Overview

This AI-enhanced application is designed to streamline survey data processing and analysis for official statistical agencies. It provides automated, low-code tools to accelerate data readiness and ensure methodological consistency, resulting in substantial time and resource savings.

### Key Features

#### 🚀 **Data Input & Configuration**
- **CSV/Excel Upload**: Support for CSV, Excel (.xlsx, .xls) files up to 16MB
- **Schema Mapping**: Automatic column detection and data type identification
- **User-Friendly Interface**: Drag-and-drop file upload with real-time validation

#### 🧹 **Cleaning Modules**
- **Missing Value Imputation**:
  - Mean imputation
  - Median imputation
  - K-Nearest Neighbors (KNN) imputation
- **Outlier Detection**:
  - Interquartile Range (IQR) method
  - Z-Score method
  - Isolation Forest (AI-based)
- **Outlier Handling**:
  - Winsorization
  - Outlier removal
- **Rule-based Validation**: Consistency checks and skip-pattern validation

#### ⚖️ **Weight Application**
- **Design Weights**: Apply survey weights for population estimation
- **Weighted Statistics**: Compute weighted means, standard errors, and confidence intervals
- **Margin of Error**: Calculate precision measures for estimates

#### 📊 **Report Generation**
- **PDF Reports**: Professional PDF reports with statistical tables
- **HTML Reports**: Interactive HTML reports with embedded visualizations
- **Standardized Templates**: Consistent formatting for official releases
- **Workflow Logs**: Complete audit trail of data processing steps

#### 📈 **Data Visualizations**
- **Distribution Plots**: Histograms for numeric variables
- **Correlation Matrix**: Heatmap visualization of variable relationships
- **Missing Data Analysis**: Visual representation of data completeness
- **Interactive Charts**: Plotly-based interactive visualizations

### Installation & Setup

#### Prerequisites
- Python 3.8 or higher
- pip package manager

#### Installation Steps

1. **Clone or download the project**
   ```bash
   git clone <repository-url>
   cd SIH
   ```

2. **Install dependencies**
   ```bash
   pip install -r requirements.txt
   ```

3. **Run the application**
   ```bash
   python app.py
   ```

4. **Access the application**
   - Open your web browser
   - Navigate to `https://asdp-g3cm.onrender.com/`
   - The application will be ready to use

### Usage Guide

#### Step 1: Upload Data
1. Click "Choose File" or drag and drop your survey data file
2. Supported formats: CSV, Excel (.xlsx, .xls)
3. Maximum file size: 16MB
4. The system will automatically analyze your data and show a summary

#### Step 2: Configure Processing
1. **Missing Value Imputation**:
   - Select imputation method (Mean, Median, KNN)
   - Choose target columns (optional - defaults to all numeric columns)

2. **Outlier Detection & Handling**:
   - Select detection method (IQR, Z-Score, Isolation Forest)
   - Choose handling method (Winsorization, Removal)
   - Select target columns (optional)

3. **Survey Weights**:
   - Select weight column from your dataset
   - Choose estimation columns (optional)

#### Step 3: Process Data
1. Click "Process Data" to start the automated cleaning and analysis
2. Monitor the processing progress
3. Review the processing log for transparency

#### Step 4: Review Results
1. **Processing Log**: Complete audit trail of all operations
2. **Statistical Estimates**: Weighted and unweighted statistics with confidence intervals
3. **Visualizations**: Interactive charts and plots
4. **Download Options**:
   - PDF Report: Professional report for official use
   - HTML Report: Interactive report with embedded visualizations
   - Processed Data: Cleaned dataset in CSV format

### Sample Data

The application includes a sample dataset (`sample_data.csv`) with the following variables:
- `respondent_id`: Unique identifier for each respondent
- `age`: Respondent age in years
- `income`: Annual income in currency units
- `education_level`: Education level (1-5 scale)
- `household_size`: Number of people in household
- `employment_status`: Employment status (0=unemployed, 1=employed)
- `health_score`: Health assessment score (0-100)
- `weight`: Survey weight for population estimation

### Technical Architecture

#### Backend (Flask)
- **DataProcessor Class**: Core data processing engine
- **RESTful API**: JSON-based communication with frontend
- **File Handling**: Secure file upload and processing
- **Report Generation**: PDF and HTML report creation

#### Frontend (HTML/CSS/JavaScript)
- **Responsive Design**: Works on desktop and mobile devices
- **Modern UI**: Bootstrap 5 with custom styling
- **Interactive Elements**: Drag-and-drop, real-time updates
- **Data Visualization**: Plotly.js integration

#### AI/ML Components
- **KNN Imputation**: Machine learning-based missing value imputation
- **Isolation Forest**: Unsupervised outlier detection
- **Statistical Analysis**: Comprehensive statistical computations

### API Endpoints

- `GET /`: Main application interface
- `POST /upload`: File upload endpoint
- `POST /clean`: Data processing endpoint
- `POST /report`: Report generation endpoint
- `POST /download_data`: Processed data download endpoint

### Configuration Options

#### Missing Value Imputation
```json
{
  "imputation": {
    "method": "mean|median|knn",
    "columns": ["column1", "column2"]
  }
}
```

#### Outlier Detection
```json
{
  "outliers": {
    "detection_method": "iqr|zscore|isolation_forest",
    "handling_method": "winsorize|remove",
    "columns": ["column1", "column2"]
  }
}
```

#### Survey Weights
```json
{
  "weights": {
    "column": "weight_column_name"
  },
  "estimate_columns": ["column1", "column2"]
}
```

### Benefits for MoSPI

#### 🎯 **Efficiency Gains**
- **Time Savings**: Automated processing reduces manual work by 80-90%
- **Error Reduction**: Consistent methodology eliminates human errors
- **Reproducibility**: Complete audit trail ensures transparency

#### 📊 **Quality Improvement**
- **Data Quality**: Advanced cleaning algorithms improve data integrity
- **Statistical Rigor**: Proper weighting and error estimation
- **Standardization**: Consistent output formats across surveys

#### 🔄 **Scalability**
- **Batch Processing**: Handle multiple surveys simultaneously
- **Configurable**: Adapt to different survey types and requirements
- **Extensible**: Easy to add new cleaning methods and visualizations

### Future Enhancements

#### Planned Features
- **Dashboard Analytics**: Real-time monitoring of survey processing
- **Advanced Visualizations**: More sophisticated chart types
- **Machine Learning Models**: Predictive analytics for data quality
- **API Integration**: Connect with existing MoSPI systems
- **Multi-language Support**: Support for regional languages

#### Innovation Opportunities
- **Natural Language Processing**: Automated report writing
- **Blockchain Integration**: Immutable audit trails
- **Cloud Deployment**: Scalable cloud infrastructure
- **Mobile Application**: Field data collection integration

### Support & Documentation

For technical support or questions:
- Review the processing logs for detailed operation information
- Check the console output for error messages
- Ensure your data format matches the expected structure

### License

This application is developed for the Ministry of Statistics and Programme Implementation (MoSPI) as part of the AI-enhanced data processing initiative.

---

**Developed for**: Ministry of Statistics and Programme Implementation (MoSPI)  
**Purpose**: Automated Data Preparation, Estimation and Report Writing  
**Technology Stack**: Python, Flask, Pandas, Scikit-learn, Plotly, Bootstrap

# ASDP

